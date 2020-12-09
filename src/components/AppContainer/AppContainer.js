import React, { useState } from 'react';
import firebase from 'services/firebase_init'
import App from 'components/App/App'
import citizenServices from 'services/citizen'
import InstallApp from 'components/InstallApp/InstallApp'

const AppContainer = () => {
  const[isScanning,setScanning] = useState(false)
  const[citizenInfo,setCitizenInfo] = useState({})
  const[notification,setNotification] = useState("")
  const[showInstall,setShowInstall] = useState(false)
  const[installPrompt,setInstallPrompt] = useState(null)

  const storage = window.localStorage
  var triggerEvent;


  window.addEventListener('beforeinstallprompt',(e)=>{
    triggerEvent = e;
    console.log("Before Install prompt")
    
  })

  const showInstallPromition = (prompt) => {
    setShowInstall(true)
    setInstallPrompt(prompt)
  }

  const registerToServer = (token) => {
    console.log("Registering as new citizen")
    citizenServices.register(token).then(resp => {
      storage.setItem("UID",resp.citizenID)
      setCitizenInfo(resp)
    })
  }

  const loginToServer = (token,uid) => {
    console.log("Logging in as exsisting citizen")
    citizenServices.login(token,uid).then(resp => {
      console.log(resp)
      setCitizenInfo(resp)
    })
  }

  const updateCitizenInfo = () => {
    let id = storage.getItem("UID")
    if(id != null){
      console.log("Updating citizen info")
      citizenServices.getCitizen(id).then(data => {
        setCitizenInfo(data)
      })
    }    
  }

  const initNotifications = () => {

    const msg = firebase.messaging();

    //Request notifications permission and send FCM token to server
    Notification.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.log("token",data)
      if(storage.getItem("UID") == null){
        registerToServer(data)
      }
      else{
        loginToServer(data,storage.getItem("UID"))
        updateCitizenInfo()
      }
    }).then(() => {
      //showInstallPromition(triggerEvent)
    })

    //Init the onMessage to show notifications
    msg.onMessage((payload) => {
      console.log("Message received",payload)
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
          console.log("Showing a notification")
          const notificationTitle = payload.notification.title;
          const notificationOptions = {
            body: payload.notification.body
          };
          reg.showNotification(notificationTitle,notificationOptions);
          updateCitizenInfo()
        });
      }
    })
  }

  React.useEffect(initNotifications,[])

  const handleError = (error) => {
    console.error(error)
  }

  const handleScan = (data) => {
    if(data){
      console.log("Handle scan",data)
      setScanning(false)
      citizenServices.postQrCode(data,storage.getItem("UID")).then(()=>{
        setNotification("QrCode was correctly scanned and registered !")
        setTimeout(()=>{ setNotification("")},10000)
      }).then( () => {updateCitizenInfo()}
      )
    }
  }

  if(!showInstall){
    return (
      <App handleScan={handleScan} handleError={handleError} citizenInfo = {citizenInfo} setScanning={setScanning} isScanning={isScanning} notif={notification}/>
    );
  }
  else{
    return(
      <InstallApp installPrompt={installPrompt} setShowInstall={setShowInstall} citizen={citizenInfo}/>
    )
  }

}

export default AppContainer;
