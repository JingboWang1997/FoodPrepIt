import firebase from 'firebase';


var config = {
  apiKey: "AIzaSyAGV47txbVoqtU3-LxhMWxVayVtjlaea84",
  authDomain: "foodprepit.firebaseapp.com",
  databaseURL: "https://foodprepit.firebaseio.com",
  projectId: "foodprepit",
  storageBucket: "foodprepit.appspot.com",
  messagingSenderId: "457232662945"
};
const fire = firebase.initializeApp(config);
export default fire;
