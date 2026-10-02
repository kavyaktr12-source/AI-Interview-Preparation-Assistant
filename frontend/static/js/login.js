document.addEventListener("DOMContentLoaded",()=>{
const form=document.getElementById("loginForm");
const email=document.getElementById("email");
const password=document.getElementById("password");
const emailError=document.getElementById("emailError");
const passwordError=document.getElementById("passwordError");
const togglePassword=document.getElementById("togglePassword");
const forgotPassword=document.getElementById("forgotPassword");
togglePassword.addEventListener("click",()=>{
if(password.type==="password"){
password.type="text";
togglePassword.textContent="Hide";
}else{
password.type="password";
togglePassword.textContent="Show";
}
});
email.addEventListener("input",()=>emailError.textContent="");
password.addEventListener("input",()=>passwordError.textContent="");
form.addEventListener("submit",(event)=>{
let valid=true;
emailError.textContent="";
passwordError.textContent="";
if(email.value.trim()===""){
emailError.textContent="Please enter your email address.";
valid=false;
}else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){
emailError.textContent="Please enter a valid email address.";
valid=false;
}
if(password.value.trim()===""){
passwordError.textContent="Please enter your password.";
valid=false;
}else if(password.value.length<6){
passwordError.textContent="Password must contain at least 6 characters.";
valid=false;
}
if(!valid)event.preventDefault();
});
forgotPassword.addEventListener("click",(event)=>{
event.preventDefault();
if(email.value.trim()===""){
alert("Please enter your email address first.");
email.focus();
}else{
alert("Password reset instructions will be sent to your email.");
}
});
});