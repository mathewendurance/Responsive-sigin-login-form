
   
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");

function register() {
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}
function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}

//disabe and enable password
function showPassword(){
    var password = document.getElementById("password");
    var enable = document.getElementById("enable");
    var disable = document.getElementById("disable");

    if(password.type === "password"){
        password.type = "text";
        enable.style.display = "block";
        disable.style.display = "none"
        enable.style.color = "red"
    }else{
        password.type = "password";
        enable.style.display = "none";
        disable.style.display = "block"
        disable.style.color = "green"
    }
}

//form validation
