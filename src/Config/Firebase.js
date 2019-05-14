import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAHD-fdShEuu8islbQ1bMCEPjfFPErUVow",
    authDomain: "remote-plc-userbase.firebaseapp.com",
    databaseURL: "https://remote-plc-userbase.firebaseio.com",
    projectId: "remote-plc-userbase",
    storageBucket: "remote-plc-userbase.appspot.com",
    messagingSenderId: "339121857868",
    appId: "1:339121857868:web:923feb9ad1b13af2"
};

const fire = firebase.initializeApp(firebaseConfig)
export default fire