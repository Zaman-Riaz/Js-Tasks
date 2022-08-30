var userName = document.getElementById("user-name");
var userEmail = document.getElementById("user-email");
var userPass = document.getElementById("user-pass");
var userLocation = document.getElementById("user-location");

function submitData() {
    var user = {
        name: userName.value,
        email1: userEmail.value,
        pass1: userPass.value,
    };


    if (user.name === "") {
        console.log("Please insert name!");
     }

     else if (user.email1 === "") {
        console.log("Please insert email !");
     }
     
     else if (user.pass1 === "") {
        console.log("Please insert password !");
     }

     else {
        console.log("Success!");
        let dataInStr = JSON.stringify(user);
        localStorage.setItem("User" , dataInStr);
        location= "login.html";
    }   
};
