
//config for firebase
var firebaseConfig = {
    apiKey: "AIzaSyCaLPopKJccvmbPF9Wc9uD2OBHSpnAX4XA",
    authDomain: "web503sean.firebaseapp.com",
    databaseURL: "https://web503sean.firebaseio.com",
    projectId: "web503sean",
    storageBucket: "web503sean.appspot.com",
    messagingSenderId: "980139296080",
    appId: "1:980139296080:web:e5219a869dc29f32ad5855",
    measurementId: "G-J8MWQMCBXT"
  };
  // Initializes Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // Changes html to show user is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_email").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});
      
function login(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // shows errors from firebase
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}
      
function logout(){
  firebase.auth().signOut();
}
      
        
        
function signUp(){
          
  var email = document.getElementById("email");
  var password = document.getElementById("password");
          
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

}
        