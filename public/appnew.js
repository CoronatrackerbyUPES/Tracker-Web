
    
function signIn(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            console.log("Sucessfully Signed in");
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
           console.log(errorMessage);
        });
    }

	function signUp(){
  
        var userEmail = document.getElementById("officialemail").value;
         var userPass = document.getElementById("officialpass").value;
       
         firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
       
           window.alert("Error : " + errorMessage);
       
           // ...
         });
         window.location.replace("dashboard.html"); 
       }
       function logout(){
        firebase.auth().signOut();
      }
firebase.auth().onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = firebase.auth().currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }
        
    } else {
        window.location.replace("/"); 
    }
});

// xxxxxxxxxx Working For Sign Out xxxxxxxxxx
function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.replace("index.html");
    }).catch(function(error) {
        // An error happened.
        let errorMessage = error.message;
        swal({
            type: 'error',
            title: 'Error',
            text: "Error",
        })
    });
}