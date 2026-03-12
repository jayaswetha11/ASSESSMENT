const form = document.getElementById("registerForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let name = document.getElementById("fullname").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;

let valid = true;

/* clear previous errors */

document.getElementById("nameError").textContent="";
document.getElementById("emailError").textContent="";
document.getElementById("passwordError").textContent="";
document.getElementById("confirmError").textContent="";
document.getElementById("successMessage").textContent="";

/* name validation */

if(name===""){
document.getElementById("nameError").textContent="Full Name is required";
valid=false;
}

/* email validation */

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(email===""){
document.getElementById("emailError").textContent="Email is required";
valid=false;
}
else if(!email.match(emailPattern)){
document.getElementById("emailError").textContent="Invalid email format";
valid=false;
}

/* password validation */

if(password.length<6){
document.getElementById("passwordError").textContent="Password must be at least 6 characters";
valid=false;
}

/* confirm password */

if(password!==confirmPassword){
document.getElementById("confirmError").textContent="Passwords do not match";
valid=false;
}

/* success */

if(valid){

document.getElementById("successMessage").textContent="Registration Successful!";

console.log({
FullName:name,
Email:email,
Password:password
});

}

});