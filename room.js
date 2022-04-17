var firebaseConfig = {
  apiKey: "AIzaSyAr2CWI8w0k1hEJNzxLq9ueHGlCWwoARWY",
  authDomain: "chatapp-86ed7.firebaseapp.com",
  databaseURL: "https://chatapp-86ed7-default-rtdb.firebaseio.com",
  projectId: "chatapp-86ed7",
  storageBucket: "chatapp-86ed7.appspot.com",
  messagingSenderId: "643575500081",
  appId: "1:643575500081:web:250a483757646a7b81f410",
  measurementId: "G-JFQ861Z6ZX"
};

// Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   username=localStorage.getItem("User");
   document.getElementById("name").innerHTML="Welcome " + username + "😁";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();  