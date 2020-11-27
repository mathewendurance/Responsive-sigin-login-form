const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('LoginForm')
const errorElement = document.getElementById('error')
const name2= document.getElementById('name2')
const password2 = document.getElementById('password2')
const form2= document.getElementById('regForm')
const errorElement2 = document.getElementById('error2')
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})  



form2.addEventListener('submit', (e) => {
  let message = []
  if (name2.value === '' || name2.value == null) {
    message.push('Name is required')
  }

  if (password2.value.length <= 6) {
    message.push('Password must be longer than 6 characters')
  }

  if (password2.value.length >= 20) {
    message.push('Password must be less than 20 characters')
  }

  if (password2.value === 'password2') {
    message.push('Password cannot be password')
  }

  if(email.value === ""){
    message.push("email cannot be blank")
  }
 

  if (message.length > 0) {
    e.preventDefault()
    errorElement2.innerText = message.join(', ')
  }
})  


 
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


//signup
function showPassword2(){
    var password = document.getElementById("password2");
    var enable = document.getElementById("enable2");
    var disable = document.getElementById("disable2");

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