document.addEventListener("DOMContentLoaded",()=>{
const rounds=[
{name:"aptitude",scoreKey:"aptitudeScore",totalKey:"aptitudeTotal",completedKey:"aptitudeCompleted",validKey:null},
{name:"technical",scoreKey:"technicalScore",totalKey:"technicalTotal",completedKey:"technicalCompleted",validKey:null},
{name:"coding",scoreKey:"codingScore",totalKey:"codingTotal",completedKey:"codingCompleted",validKey:"codingValid"},
{name:"personal",scoreKey:"personalScore",totalKey:"personalTotal",completedKey:"personalCompleted",validKey:"personalValid"},
{name:"hr",scoreKey:"hrAnswered",totalKey:"hrTotal",completedKey:"hrCompleted",validKey:null},
{name:"mock",scoreKey:"mockAnswered",totalKey:"mockTotal",completedKey:"mockCompleted",validKey:null}
];

let totalQuestions=0;
let totalAnswered=0;
let completedRounds=0;
let validRounds=0;
let validPercentages=[];
const scores={};

const names={
aptitude:"Aptitude Round",
technical:"Technical Round",
coding:"Coding Skill",
personal:"Personal Interview",
hr:"HR Interview",
mock:"Mock Interview"
};

rounds.forEach(round=>{
const completed=localStorage.getItem(round.completedKey)==="true";
const score=Number(localStorage.getItem(round.scoreKey))||0;
const total=Number(localStorage.getItem(round.totalKey))||0;
const valid=round.validKey?localStorage.getItem(round.validKey)==="true":completed&&total>0;

const scoreElement=document.getElementById(`${round.name}Score`);
const barElement=document.getElementById(`${round.name}Bar`);

if(completed)completedRounds++;

if(completed&&valid&&total>0){
const percentage=Math.round((score/total)*100);
scores[round.name]=percentage;
validPercentages.push(percentage);
validRounds++;
totalQuestions+=total;
totalAnswered+=score;
if(scoreElement)scoreElement.textContent=`${percentage}%`;
if(barElement)setTimeout(()=>barElement.style.width=`${percentage}%`,150);
}else{
scores[round.name]=null;
if(scoreElement)scoreElement.textContent="Not Available";
if(barElement)setTimeout(()=>barElement.style.width="0%",150);
}
});

const overall=validPercentages.length?Math.round(validPercentages.reduce((a,b)=>a+b,0)/validPercentages.length):0;

const overallElement=document.getElementById("overallScore");
const completedElement=document.getElementById("completedRounds");
const totalQuestionsElement=document.getElementById("totalQuestions");
const answeredQuestionsElement=document.getElementById("answeredQuestions");
const completionRateElement=document.getElementById("completionRate");

if(overallElement)overallElement.textContent=validPercentages.length?`${overall}%`:"Not Available";
if(completedElement)completedElement.textContent=`${completedRounds} / 6`;
if(totalQuestionsElement)totalQuestionsElement.textContent=totalQuestions;
if(answeredQuestionsElement)answeredQuestionsElement.textContent=totalAnswered;
if(completionRateElement)completionRateElement.textContent=totalQuestions?`${Math.round((totalAnswered/totalQuestions)*100)}%`:"Not Available";

const validEntries=Object.entries(scores).filter(([name,score])=>score!==null);

if(validEntries.length){
const strongest=validEntries.reduce((best,current)=>current[1]>best[1]?current:best);
const weakest=validEntries.reduce((worst,current)=>current[1]<worst[1]?current:worst);

const strengthTitle=document.getElementById("strengthTitle");
const strengthText=document.getElementById("strengthText");
const focusTitle=document.getElementById("focusTitle");
const focusText=document.getElementById("focusText");

if(strengthTitle)strengthTitle.textContent=names[strongest[0]];
if(strengthText)strengthText.textContent=`Your current performance in this area is ${strongest[1]}%. Continue regular practice to maintain your progress.`;
if(focusTitle)focusTitle.textContent=names[weakest[0]];
if(focusText)focusText.textContent=`Your current performance in this area is ${weakest[1]}%. Focused practice can help improve this area.`;
}else{
const strengthTitle=document.getElementById("strengthTitle");
const strengthText=document.getElementById("strengthText");
const focusTitle=document.getElementById("focusTitle");
const focusText=document.getElementById("focusText");

if(strengthTitle)strengthTitle.textContent="Not Available";
if(strengthText)strengthText.textContent="Complete a round with valid answers to view performance data.";
if(focusTitle)focusTitle.textContent="Not Available";
if(focusText)focusText.textContent="Valid performance data is required before identifying an improvement area.";
}

const continueBtn=document.getElementById("continueBtn");

if(continueBtn){
continueBtn.addEventListener("click",()=>{
if(validRounds===0)return;
localStorage.setItem("performanceScore",overall);
localStorage.setItem("performanceCompleted","true");
window.location.href="/personalized-recommendations";
});
}
});