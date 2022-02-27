//Login

//Opening IFFE
(function () {
  //Hide create form and error/success messages

  document.querySelector("#createCustomAccount").style.display = "none";
  document.querySelector("#tryAgain").style.display = "none";
  document.querySelector("#success").style.display = "none";

  //Click events for buttons and their related functions
  document.querySelector("#firstLogIn").addEventListener("click", logIn);

  document.querySelector("#signUp").addEventListener("click", createAccount);

  //Admin username and password set for initial login as an object literal
  let user = { userName: "admin", userPassword: "1234" };

  //Variable set to false for initial/admin login, needs to turn true when account is created and detected on second login with new/custom credentials
  let userLogIn = false;

  //Create your custom account

  function createAccount(e) {
    let userName = document.querySelector("#customUser").value;
    let userPassword = document.querySelector("#customPass").value;
    let location = document.querySelector("#userLocation").value;

    //Redefining user variable in line 17, here as a function with 3 paramaters to create the account
    user = createUser(userName, userPassword, location);

    //console.log(user.newUser, user.newPass, user.location);

    document.querySelector("#createCustomAccount").style.display = "none";
    document.querySelector("#adminLogIn").style.display = "flex";
    document.querySelector("#tryAgain").style.display = "none";

    document.querySelector("#loginTitle").innerHTML = "Sign In";
    document.querySelector("#usernameLabel").innerHTML = "Username";
    document.querySelector("#passwordLabel").innerHTML = "Password";

    //Set login variable to true once account is created
    userLogIn = true;
  }

  //Admin login
  function logIn(e) {
    let userName = document.querySelector("#adminUser").value;
    let userPassword = document.querySelector("#adminPass").value;

    if (userName == user.userName && userPassword == user.userPassword) {
      document.querySelector("#tryAgain").style.display = "none";
      if (userLogIn == true) {
        document.querySelector("#success").style.display = "flex";
        document.querySelector("#tryAgain").style.display = "none";
      } else {
        document.querySelector("#adminLogIn").style.display = "none";
        document.querySelector("#createCustomAccount").style.display = "flex";
      }
    } else {
      document.querySelector("#tryAgain").style.display = "flex";
      document.querySelector("#success").style.display = "none";

      console.log("bad job");
    }
  }
})();

//Outside IFFE
//Using function to RETURN an object
function createUser(username, password, location) {
  return { userName: username, userPassword: password, location: location };
}
