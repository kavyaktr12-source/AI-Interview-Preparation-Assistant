document.addEventListener("DOMContentLoaded",()=>{
const registerForm=document.getElementById("registerForm");
const firstName=document.getElementById("first_name");
const lastName=document.getElementById("last_name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirm_password");
const terms=document.getElementById("terms");
const togglePassword=document.getElementById("togglePassword");
const toggleConfirm=document.getElementById("toggleConfirm");
togglePassword.addEventListener("click",()=>{
if(password.type==="password"){
password.type="text";
togglePassword.textContent="Hide";
}else{
password.type="password";
togglePassword.textContent="Show";
}
});
toggleConfirm.addEventListener("click",()=>{
if(confirmPassword.type==="password"){
confirmPassword.type="text";
toggleConfirm.textContent="Hide";
}else{
confirmPassword.type="password";
toggleConfirm.textContent="Show";
}
});
registerForm.addEventListener("submit",event=>{
let valid=true;
document.querySelectorAll(".input-group small,#termsError").forEach(item=>item.textContent="");
if(firstName.value.trim()===""){
document.getElementById("firstNameError").textContent="First name is required";
valid=false;
}
if(lastName.value.trim()===""){
document.getElementById("lastNameError").textContent="Last name is required";
valid=false;
}
if(email.value.trim()===""){
document.getElementById("emailError").textContent="Email is required";
valid=false;
}else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){
document.getElementById("emailError").textContent="Enter a valid email";
valid=false;
}
if(password.value.length<6){
document.getElementById("passwordError").textContent="Password must contain at least 6 characters";
valid=false;
}
if(confirmPassword.value!==password.value){
document.getElementById("confirmPasswordError").textContent="Passwords do not match";
valid=false;
}
if(!terms.checked){
document.getElementById("termsError").textContent="Please accept the terms and conditions";
valid=false;
}
if(!valid)event.preventDefault();
});
});