import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAHTu-58owlfA0UE2YeRdLOx-I4tT7utY4",
    authDomain: "blockcovid-f89e6.firebaseapp.com",
    databaseURL: "https://blockcovid-f89e6.firebaseio.com",
    projectId: "blockcovid-f89e6",
    storageBucket: "blockcovid-f89e6.appspot.com",
    messagingSenderId: "806396891523",
    appId: "1:806396891523:web:72a7c917368ad22d25a6b6",
    measurementId: "G-EKXK03PD48"
};

firebase.initializeApp(firebaseConfig);

export default firebase
