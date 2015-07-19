myFunction = function(){
  console.log("true");
  var userNameElement = document.getElementsByClassName("userName");
  var passwordElement = document.getElementsByClassName("password");
  
  console.log(passwordElement);

  var userName = userNameElement[0].value 
  var password = passwordElement[0].value

  console.log("Username: " + userName)
  console.log("Password: " + password)

};




// var namesArray = ["bill", "ted", "rob",];
// var data2 = false;

// for(var i= 0; i < namesArray.length; i++) {
//     while(data2 == false) {
//     var userName = prompt("choose your user name:");
//     if(userName == namesArray[i]) {
//         console.log("user name is already in use.");
//         data2 = false
//     }
//     else if(userName !== namesArray[i]) {
//         data2= true
//     }
//     }
// };

// var userPass= prompt("choose a password:");
// var data = false;

// while(data == false) {
//     var userGivenName = prompt("what is your username?");
//     var userGivenPass = prompt("what is your password?");

//     if(userName == userGivenName && userPass == userGivenPass) {
//         console.log("correct");
//         data = true
//     }
//     else if(userName !== userGivenName) {
//         console.log("user name does not exist");
//         data = false
//     }
//     else if(userPass !== userGivenPass) {
//         console.log("password incorrect, please try again.");
//         data = false
//     }
// };
