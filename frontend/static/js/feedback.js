document.addEventListener("DOMContentLoaded",()=>{
const overallScore=Number(localStorage.getItem("performanceScore"))||0;
const scoreElement=document.getElementById("overallScore");
const stars=document.querySelectorAll("#stars button");
const ratingText=document.getElementById("ratingText");
const message=document.getElementById("feedbackMessage");
const improvement=document.getElementById("improvement");
const submit=document.getElementById("submitFeedback");
const success=document.getElementById("successMessage");
const restart=document.getElementById("restartBtn");
let selectedRating=0;
scoreElement.textContent=`${overallScore}%`;
const ratingLabels={
1:"Needs improvement",
2:"Could be better",
3:"Good experience",
4:"Very good experience",
5:"Excellent experience"
};
stars.forEach(star=>{
star.addEventListener("click",()=>{
selectedRating=Number(star.dataset.rating);
stars.forEach(item=>{
item.classList.toggle("active",Number(item.dataset.rating)<=selectedRating);
});
ratingText.textContent=ratingLabels[selectedRating];
});
});
submit.addEventListener("click",()=>{
if(selectedRating===0){
alert("Please select a rating.");
return;
}
if(message.value.trim()===""){
alert("Please enter your feedback.");
message.focus();
return;
}
if(improvement.value===""){
alert("Please select an improvement area.");
improvement.focus();
return;
}
localStorage.setItem("feedbackRating",selectedRating);
localStorage.setItem("feedbackMessage",message.value.trim());
localStorage.setItem("feedbackImprovement",improvement.value);
localStorage.setItem("feedbackCompleted","true");
submit.style.display="none";
success.classList.add("show");
message.disabled=true;
improvement.disabled=true;
stars.forEach(star=>star.disabled=true);
});
restart.addEventListener("click",()=>{
const keys=[
"resumeScore","resumeCompleted",
"aptitudeScore","aptitudeTotal","aptitudeCompleted",
"technicalScore","technicalTotal","technicalCompleted",
"codingScore","codingTotal","codingCompleted",
"personalAnswered","personalTotal","personalCompleted",
"hrAnswered","hrTotal","hrCompleted",
"mockAnswered","mockTotal","mockCompleted",
"performanceScore","performanceCompleted",
"recommendationsCompleted",
"feedbackRating","feedbackMessage","feedbackImprovement","feedbackCompleted"
];
keys.forEach(key=>localStorage.removeItem(key));
window.location.href="/";
});
});