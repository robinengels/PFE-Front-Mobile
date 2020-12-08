import React, { useState } from 'react';
import firebase from 'services/firebase_init'
import App from 'components/App/App'
import citizenServices from 'services/citizen'
const AppContainer = () => {
  const[isScanning,setScanning] = useState(false)
  const[citizenInfo,setCitizenInfo] = useState({})
  const[notification,setNotification] = useState("")

  const storage = window.localStorage

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
        loginToServer(data)
      }
    })

    //Init the onMessage to show notifications
    msg.onMessage((payload) => {
      console.log("Message received",payload)
      if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
          console.log("Showing a notification")
          reg.showNotification(payload.data.body);
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
      })
    }
  }

  return (
    <App handleScan={handleScan} handleError={handleError} citizenInfo = {citizenInfo} setScanning={setScanning} isScanning={isScanning} notif={notification}/>
  );
}

export default AppContainer;
