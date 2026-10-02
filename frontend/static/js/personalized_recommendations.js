document.addEventListener("DOMContentLoaded",()=>{
const rounds=[
{name:"aptitude",title:"Aptitude Round",scoreKey:"aptitudeScore",totalKey:"aptitudeTotal"},
{name:"technical",title:"Technical Round",scoreKey:"technicalScore",totalKey:"technicalTotal"},
{name:"coding",title:"Coding Skill",scoreKey:"codingScore",totalKey:"codingTotal"},
{name:"personal",title:"Personal Interview",scoreKey:"personalAnswered",totalKey:"personalTotal"},
{name:"hr",title:"HR Interview",scoreKey:"hrAnswered",totalKey:"hrTotal"},
{name:"mock",title:"Mock Interview",scoreKey:"mockAnswered",totalKey:"mockTotal"}
];
const scores={};
rounds.forEach(round=>{
const score=Number(localStorage.getItem(round.scoreKey))||0;
const total=Number(localStorage.getItem(round.totalKey))||0;
scores[round.name]=total?Math.round((score/total)*100):0;
});
const overall=Number(localStorage.getItem("performanceScore"))||Math.round(Object.values(scores).reduce((a,b)=>a+b,0)/rounds.length);
document.getElementById("overallScore").textContent=`${overall}%`;
const sorted=Object.entries(scores).sort((a,b)=>a[1]-b[1]);
const weakest=sorted[0];
const strongest=sorted[sorted.length-1];
const titles={
aptitude:"Aptitude Round",
technical:"Technical Round",
coding:"Coding Skill",
personal:"Personal Interview",
hr:"HR Interview",
mock:"Mock Interview"
};
document.getElementById("focusTitle").textContent=titles[weakest[0]];
document.getElementById("focusScore").textContent=`${weakest[1]}%`;
if(weakest[1]<50){
document.getElementById("focusText").textContent="Spend additional practice time on this area and repeat similar interview questions regularly.";
}else if(weakest[1]<75){
document.getElementById("focusText").textContent="This area has room for improvement. Focused practice can help increase your performance.";
}else{
document.getElementById("focusText").textContent="Continue practicing this area to maintain consistency and improve further.";
}
document.getElementById("summaryTitle").textContent=`Your current overall performance is ${overall}%`;
document.getElementById("summaryText").textContent=`Your strongest area is ${titles[strongest[0]]} at ${strongest[1]}%, while ${titles[weakest[0]]} needs more focused practice.`;
if(weakest[0]==="aptitude"){
document.getElementById("rec1Title").textContent="Practice aptitude problem solving";
document.getElementById("rec1Text").textContent="Work on logical reasoning, numerical problems, probability and time-based aptitude questions.";
}
if(weakest[0]==="technical"){
document.getElementById("rec1Title").textContent="Strengthen technical fundamentals";
document.getElementById("rec1Text").textContent="Revise Data Science, Data Analysis, Machine Learning, AI and Python concepts with application-based practice.";
}
if(weakest[0]==="coding"){
document.getElementById("rec1Title").textContent="Increase coding practice";
document.getElementById("rec1Text").textContent="Practice algorithms, data structures, optimization and problem-solving under time constraints.";
}
if(weakest[0]==="personal"){
document.getElementById("rec1Title").textContent="Improve personal interview answers";
document.getElementById("rec1Text").textContent="Practice structured answers using real project experiences and explain your decisions clearly.";
}
if(weakest[0]==="hr"){
document.getElementById("rec1Title").textContent="Improve HR interview preparation";
document.getElementById("rec1Text").textContent="Practice behavioral questions, conflict situations, leadership examples and professional decision-making.";
}
if(weakest[0]==="mock"){
document.getElementById("rec1Title").textContent="Repeat mock interviews";
document.getElementById("rec1Text").textContent="Practice complete interview simulations to improve confidence, consistency and response structure.";
}
document.getElementById("continueBtn").addEventListener("click",()=>{
localStorage.setItem("recommendationsCompleted","true");
window.location.href="/feedback";
});
});