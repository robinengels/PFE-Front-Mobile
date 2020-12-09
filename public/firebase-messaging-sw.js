// @ts-nocheck
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
  firebase.initializeApp({
    apiKey: "AIzaSyAHTu-58owlfA0UE2YeRdLOx-I4tT7utY4",
    authDomain: "blockcovid-f89e6.firebaseapp.com",
    databaseURL: "https://blockcovid-f89e6.firebaseio.com",
    projectId: "blockcovid-f89e6",
    storageBucket: "blockcovid-f89e6.appspot.com",
    messagingSenderId: "806396891523",
    appId: "1:806396891523:web:72a7c917368ad22d25a6b6",
    measurementId: "G-EKXK03PD48"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body
    };
    //self.registration.showNotification(notificationTitle,
     // notificationOptions);
  });