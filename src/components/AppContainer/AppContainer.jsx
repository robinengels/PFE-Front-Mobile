import React, { useContext } from 'react';
import firebase from 'services/firebase_init'
import App from 'components/App/App'
import citizenServices from 'services/citizen'
import AppContext from 'contexts/AppContext'

const AppContainer = () => {
  const {setCitizenInfo,updateCitizenInfo} =useContext(AppContext)
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
      updateCitizenInfo()
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
        loginToServer(data,storage.getItem("UID"))
      }
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
          reg.showNotification(notificationTitle,notificationOptions).then(() => {
            updateCitizenInfo() //CitizenInfo should be updated after showing a notification
          });       
        });
      }
    })
  }

  React.useEffect(initNotifications,[])
  React.useEffect(updateCitizenInfo,[])

  window.onfocus = () => {
    console.log("Getting focus on windows")
    updateCitizenInfo()
  }

  return (
      <App/>
  );

}

export default AppContainer;
