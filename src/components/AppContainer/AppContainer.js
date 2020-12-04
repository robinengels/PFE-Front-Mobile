import React, { useState } from 'react';
import './App.css';
import firebase from 'services/firebase_init'
import App from 'components/App/App'
import axios from 'axios'
const AppContainer = () => {

  const[result,setResult] = useState("No QrCode scanned !")

  const sendTokenToServer = (data) => {
    const sentObject = {
      First_name : null,
      Last_name : null,
      tokenFirebase : data,
      Is_Positive : false
    }
    axios.post("https://pfe-backend-dev.azurewebsites.net/api/Citizens"
                ,sentObject).then(response => {
                  console.log(response)
                })
  }

  const initNotifications = () => {

    const msg = firebase.messaging();

    //Request notifications permission and send FCM token to server
    Notification.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.log("token",data)
      //sendTokenToServer(data)
    })

    //Init the onMessage to show notifications
    msg.onMessage((payload) => {
      console.log("Message received",payload)
      if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
          console.log("Showing a notification")
          reg.showNotification('Hello world!');
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
      setResult(data)
    }
  }

  return (
    <App handleScan={handleScan} handleError={handleError} result = {result}/>
  );
}

export default App;
