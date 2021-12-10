var firebaseConfig = {
    apiKey: "AIzaSyBdShXymNnFBMMGIdzN30KB7oEh_XTuxvs",
  authDomain: "plant-d505e.firebaseapp.com",
  projectId: "plant-d505e",
  storageBucket: "plant-d505e.appspot.com",
  messagingSenderId: "90744889040",
  appId: "1:90744889040:web:0c99e49fbebad2e00b48d5",
  measurementId: "G-BDZP2S772X"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    auth.createUserWithEmailAndPassword(email.value,password.value)
    .then((userCredentials) =>{
        location.reload()
        var user=userCredentials.user
        console.log(user.email)
    }).catch( (error) => {
        var errorMessage = error.message
        alert(errorMessage)
    })
    
}

function signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    auth.signInWithEmailAndPassword(email.value,password.value)
    .then((userCredentials) =>{
        var user=userCredentials.user
        window.location="index.html"
        console.log(user.email)
    }).catch( (error) => {
        var errorMessage = error.message
        alert(errorMessage)
    })
    
}


function signOut(){
    auth.signOut();
    alert("SignOut Successfully");
}

