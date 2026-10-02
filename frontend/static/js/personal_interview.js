const questions=[
"Tell me about yourself and your background.",
"What are your greatest strengths?",
"What is one weakness you are currently working to improve?",
"Where do you see yourself in five years?",
"Why should we hire you for this position?",
"Why are you interested in this job role?",
"What motivates you to perform your best?",
"How do you handle pressure and stressful situations?",
"How do you prioritize multiple tasks with the same deadline?",
"Describe a difficult decision you have made and how you handled it.",
"How do you handle failure?",
"How do you respond to criticism?",
"Describe a situation where you had to learn something quickly.",
"How do you manage your time when working on multiple responsibilities?",
"Describe a situation where you solved a difficult problem.",
"How do you handle disagreements with team members?",
"Describe a time when you took responsibility for a mistake.",
"How do you react when your ideas are rejected?",
"How do you handle working with someone who has a different opinion?",
"Describe a situation where you demonstrated leadership.",
"How do you motivate yourself when you lose interest in a task?",
"What does success mean to you?",
"What is your biggest professional achievement?",
"Describe a challenging project you completed successfully.",
"What are your expectations from your future career?"
];

let current=0;
let answers=Array(questions.length).fill("");
let timeLeft=30*60;
let submitted=false;
let countdown;

const question=document.getElementById("question");
const answer=document.getElementById("answer");
const questionNumber=document.getElementById("questionNumber");
const questionCount=document.getElementById("questionCount");
const progress=document.getElementById("progress");
const previousBtn=document.getElementById("previousBtn");
const nextBtn=document.getElementById("nextBtn");
const submitBtn=document.getElementById("submitBtn");
const timer=document.getElementById("timer");

questions.forEach(()=>{
const dot=document.createElement("span");
progress.appendChild(dot);
});

function isMeaningfulAnswer(answer,index){
const text=answer.trim().toLowerCase();
const words=text.split(/\s+/).filter(Boolean);
if(words.length<8)return false;
if(text.length<50)return false;
if(/^(hello|hi|hey|test|testing|abc|abcd|asdf|random|nothing|no idea|dont know|i don't know|ok|okay|yes|no|good|fine|sample|answer)$/i.test(text))return false;
const genericCount=words.filter(word=>["the","and","is","to","of","a","in","for","with","my","i","it","that","this","was","have","will"].includes(word)).length;
if(genericCount>words.length*0.75)return false;
const keywordGroups=[
["yourself",["experience","education","background","skills","project","work","learn"]],
["strengths",["strength","communication","problem","team","leadership","learning","adapt","skill"]],
["weakness",["improve","weakness","learning","develop","work","practice","better"]],
["five years",["career","goal","future","growth","role","skills","leadership","experience"]],
["hire",["skills","experience","value","contribute","team","role","knowledge","project"]],
["interested",["interest","career","role","skills","company","learn","opportunity"]],
["motivates",["goal","motivation","success","challenge","learning","achievement","result"]],
["pressure",["pressure","stress","calm","priority","plan","focus","deadline","manage"]],
["prioritize",["priority","deadline","urgent","plan","organize","schedule","task"]],
["decision",["decision","situation","choice","analysis","result","impact","experience"]],
["failure",["failure","learn","mistake","improve","experience","lesson"]],
["criticism",["feedback","criticism","improve","listen","learn","change"]],
["learn",["learn","training","research","practice","quickly","adapt","knowledge"]],
["time",["time","schedule","priority","deadline","organize","manage"]],
["problem",["problem","solution","analysis","approach","result","solve","experience"]],
["disagreements",["disagreement","communication","listen","team","discuss","solution","respect"]],
["mistake",["mistake","responsibility","learn","correct","improve","solution"]],
["rejected",["feedback","accept","listen","explain","team","alternative","learn"]],
["different opinion",["opinion","listen","respect","discuss","team","understand","solution"]],
["leadership",["leadership","team","responsibility","decision","guide","result","communication"]],
["lose interest",["motivation","goal","discipline","focus","break","priority","complete"]],
["success",["success","goal","achievement","growth","learning","result"]],
["achievement",["achievement","project","result","challenge","success","contribution"]],
["challenging project",["project","challenge","problem","solution","team","result","learning"]],
["career",["career","goal","growth","skills","future","learning","opportunity"]]
];
const questionText=questions[index].toLowerCase();
let group=keywordGroups.find(item=>questionText.includes(item[0]));
if(!group)return words.length>=12;
const matches=group[1].filter(word=>text.includes(word)).length;
return matches>=2;
}

function renderQuestion(){
questionNumber.textContent=`QUESTION ${String(current+1).padStart(2,"0")}`;
questionCount.textContent=`Question ${current+1} of ${questions.length}`;
question.textContent=questions[current];
answer.value=answers[current]||"";
previousBtn.style.display=current===0?"none":"block";
nextBtn.style.display=current===questions.length-1?"none":"block";
submitBtn.style.display=current===questions.length-1?"block":"none";
const hasAnswer=answer.value.trim()!=="";
nextBtn.disabled=!hasAnswer;
submitBtn.disabled=!hasAnswer;
[...progress.children].forEach((dot,index)=>dot.classList.toggle("active",index<=current));
}

function saveAnswer(){
answers[current]=answer.value;
}

function moveNext(){
saveAnswer();
if(answers[current].trim()==="")return;
if(current<questions.length-1){
current++;
renderQuestion();
}
}

function movePrevious(){
saveAnswer();
if(current>0){
current--;
renderQuestion();
}
}

function submitTest(){
if(submitted)return;
saveAnswer();
if(answers[current].trim()==="")return;
submitted=true;
clearInterval(countdown);
const validAnswers=answers.map((answer,index)=>isMeaningfulAnswer(answer,index));
const validCount=validAnswers.filter(Boolean).length;
const answeredCount=answers.filter(item=>item.trim()!=="").length;
const hasValidPersonal=validCount>0;
localStorage.setItem("personalScore",validCount);
localStorage.setItem("personalAnswered",answeredCount);
localStorage.setItem("personalValidAnswers",validCount);
localStorage.setItem("personalTotal",questions.length);
localStorage.setItem("personalCompleted","true");
localStorage.setItem("personalValid",hasValidPersonal?"true":"false");
window.location.href="/hr-interview";
}

function updateTimer(){
const minutes=Math.floor(timeLeft/60);
const seconds=timeLeft%60;
timer.textContent=`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
if(timeLeft<=0){
submitTest();
return;
}
timeLeft--;
}

answer.addEventListener("input",()=>{
answers[current]=answer.value;
const hasAnswer=answer.value.trim()!=="";
nextBtn.disabled=!hasAnswer;
submitBtn.disabled=!hasAnswer;
});

previousBtn.addEventListener("click",movePrevious);
nextBtn.addEventListener("click",moveNext);
submitBtn.addEventListener("click",submitTest);

renderQuestion();
updateTimer();
countdown=setInterval(updateTimer,1000);