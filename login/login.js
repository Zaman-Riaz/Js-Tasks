// Note: Fetching data from database
var fetchData = localStorage.getItem("User");
// console.log(fetchData);

var dataInJson= JSON.parse(fetchData);
// console.log(dataInJson);

var uEmail= document.getElementById("email2");
var uPass = document.getElementById("pass2");


function loginData() {
   var user = { 
    email: uEmail.value ,
    pass: uPass.value 
   };

   if (dataInJson.email1 == user.email && dataInJson.pass1 == user.pass) {
    location="welcome.html";
   }

   else {
    alert("email and password is incorrect");
}   
   
};