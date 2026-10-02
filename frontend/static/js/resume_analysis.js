const resumeInput=document.getElementById("resume");
const fileName=document.getElementById("fileName");
const resumeForm=document.getElementById("resumeForm");
const scoreFill=document.querySelector(".score-fill");

if(resumeInput){
resumeInput.addEventListener("change",()=>{
if(resumeInput.files.length>0){
fileName.textContent=resumeInput.files[0].name;
}else{
fileName.textContent="No file selected";
}
});
}

if(resumeForm){
resumeForm.addEventListener("submit",()=>{
const button=resumeForm.querySelector(".upload-btn");
if(button){
button.textContent="Uploading & Analyzing...";
button.disabled=true;
}
});
}

if(scoreFill){
const score=Number(scoreFill.dataset.score)||0;
scoreFill.style.width=`${score}%`;
}