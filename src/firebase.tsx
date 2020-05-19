import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAP4jPCm2k95KUBf0tEznvoZ0SE4EAo_o8",
  authDomain: "recipesapp-3d38b.firebaseapp.com",
  databaseURL: "https://recipesapp-3d38b.firebaseio.com",
  projectId: "recipesapp-3d38b",
  storageBucket: "recipesapp-3d38b.appspot.com",
  messagingSenderId: "279594077217"
};
firebase.initializeApp(config);

export default firebase;
