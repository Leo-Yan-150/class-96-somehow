var firebaseConfig = {
      apiKey: "AIzaSyDVzuXEGBeTEdgIv37qks-RVoT4lkO10A4",
      authDomain: "kwitter1-96c53.firebaseapp.com",
      databaseURL: "https://kwitter1-96c53-default-rtdb.firebaseio.com",
      projectId: "kwitter1-96c53",
      storageBucket: "kwitter1-96c53.appspot.com",
      messagingSenderId: "657743082848",
      appId: "1:657743082848:web:914ab58fd6e588525cda05"
    };
    firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("username");
var room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
Name:user_name,
Message:msg,
likes:0
});

document.getElementById("msg").value = "";
}
function logout(){
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}