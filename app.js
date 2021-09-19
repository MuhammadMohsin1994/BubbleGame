const firebaseConfig = {
    apiKey: "AIzaSyDaD1AgzGCZOnlGoF3DvTjkQyas39AEkCs",
    authDomain: "bubblegame-249fc.firebaseapp.com",
    projectId: "bubblegame-249fc",
    storageBucket: "bubblegame-249fc.appspot.com",
    messagingSenderId: "22451021102",
    appId: "1:22451021102:web:12c192fc4d662a2b2c06bf",
    measurementId: "G-48XSS5C6ZP"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.database;
  const db1 = firebase.firestore();
  
  function signinwithgoogle()
  {
     event.preventDefault();
      let  provider = new firebase.auth.GoogleAuthProvider(); 
      auth.signInWithPopup(provider)
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);

    });
    // auth.getPoptResult()
    // .then((result) => {
    //   if (result.credential) {
    //     var credential = result.credential;
    //     var token = credential.accessToken;
    //   }
    //   var user = result.user;
    //   alert(credential,token);
    // }).catch((error) => {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
      // ...
    // });
  //   auth.signInWithRedirect(provider);
  }
  function Signup() {
    let txtemail = document.getElementById("TxtemailS").value;
    let txtpass = document.getElementById("txtpassS").value;
    auth.createUserWithEmailAndPassword(txtemail, txtpass)
        .then((userCredential) => {
            alert("User Save");
            
        })
        .catch((error) => {
            alert(error.message);
        });
}
function login(){
    let txtemail = document.getElementById("TxtemailL").value;
    let txtpass = document.getElementById("txtpassL").value;
    firebase.auth().signInWithEmailAndPassword(txtemail, txtpass)
  .then((userCredential) => {
    // Signed in
    
    window.location.replace("./Game.html");
    // ...
  })
  .catch((error) => {
    
    alert(error.message);
  });
} 

function transsign() {
    event.preventDefault();
    document.getElementById("Signup").style.zIndex = '-1';
    document.getElementById("LgnPic").style.marginLeft = '51%';
    document.getElementById("LgnPic").style.borderTopLeftRadius = '0px';
    document.getElementById("LgnPic").style.borderBottomLeftRadius = '0px';
    document.getElementById("LgnPic").style.bordertopRightRadius = '15px';
    document.getElementById("LgnPic").style.borderBottomRightRadius = '15px';
    document.getElementById("Signup").style.opacity = '0%';
    document.getElementById("lgn").style.opacity = '100%';
}
function translogin() {
    event.preventDefault();
    document.getElementById("lgn").style.zIndex = '-1';
    document.getElementById("LgnPic").style.marginLeft = '0%';
    document.getElementById("lgn").style.opacity = '0%';
    document.getElementById("Signup").style.opacity = '100%';
}