import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DB,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_SID,
  appId: process.env.REACT_APP_APPID,
};
//INITALIZE THE DATABSE APP
firebase.initializeApp(config);
//GET A REFERENCE OF OUR DATABASE
const databaseRef = firebase.database().ref();
export const postsRef = databaseRef.child("posts");
export default firebase;
