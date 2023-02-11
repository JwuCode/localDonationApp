import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBUq20JZXMHEFujZfQPmn4u1k9XkGMwcF8",
    authDomain: "localdonationapp.firebaseapp.com",
    projectId: "localdonationapp",
    storageBucket: "localdonationapp.appspot.com",
    messagingSenderId: "60531567178",
    appId: "1:60531567178:web:36a896173ae452040ed4b3"
  };
  
let firebaseInstance
const getFirebase = ()=>{
    if(firebaseInstance){
        return firebaseInstance
    }

    firebaseInstance = initializeApp(firebaseConfig)

    return firebaseInstance
}

export default getFirebase