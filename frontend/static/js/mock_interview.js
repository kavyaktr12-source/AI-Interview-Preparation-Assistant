const questions=[
["Tell me about a challenging project you worked on and how you handled it.",["I would explain the challenge, the actions I took, the technologies or skills I used, and the final result.","I would only describe the project without explaining the difficulties.","I would focus mainly on the problems caused by other team members.","I would give a very short answer without discussing the outcome."]],
["How would you explain a complex technical concept to a non-technical person?",["I would use simple language, practical examples, and check whether they understood the explanation.","I would use technical terminology because it is more accurate.","I would avoid explaining the concept in detail.","I would ask them to learn the technical topic themselves."]],
["Describe a time when you had to solve a problem without having all the required information.",["I would identify what is known, research reliable information, make reasonable assumptions, and validate the solution.","I would wait until someone provides every required detail.","I would make a random decision without checking anything.","I would immediately give up because the information is incomplete."]],
["What would you do if your project was falling behind schedule?",["I would identify the cause, prioritize critical tasks, communicate the risk, and adjust the plan.","I would continue working without informing anyone about the delay.","I would blame the team for missing the schedule.","I would ignore the deadline until the project is almost finished."]],
["How would you handle a technical disagreement during a team discussion?",["I would explain my reasoning, listen to other viewpoints, compare the available evidence, and agree on the most suitable approach.","I would insist that my solution is correct.","I would avoid participating in the discussion.","I would accept the first suggestion without evaluating it."]],
["What would you do if you discovered a serious bug just before a release?",["I would assess its impact, inform the responsible team, help fix or contain it, and verify the solution before release.","I would ignore it because the release is already scheduled.","I would hide the bug to avoid delaying the release.","I would immediately cancel the release without investigating the issue."]],
["How do you approach learning a new technology for a project?",["I would understand the fundamentals, build a small practical example, study reliable documentation, and apply it to the project.","I would start using it without understanding how it works.","I would wait for another developer to teach me everything.","I would avoid learning it and use only technologies I already know."]],
["How would you handle a situation where your first solution does not work?",["I would analyze the failure, identify the root cause, test alternatives, and improve the solution systematically.","I would keep repeating the same approach.","I would immediately blame the requirements.","I would stop working on the problem."]],
["How would you manage an important task when you have several competing priorities?",["I would evaluate urgency and impact, create a priority order, and communicate if deadlines conflict.","I would simply work on whichever task seems easiest.","I would try to complete every task at the same time.","I would postpone the most difficult task indefinitely."]],
["Why should we select you after this interview?",["I can demonstrate relevant skills, learn quickly, solve problems systematically, and contribute responsibly to the team.","I should be selected because I need the opportunity more than other candidates.","I would say that I am better than everyone else without providing evidence.","I would avoid discussing my skills and let the interviewer decide without an answer."]]
];

let current=0;
let answers=Array(questions.length).fill(null);
let timeLeft=15*60;
let submitted=false;
let countdown;

const question=document.getElementById("question");
const options=document.getElementById("options");
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

function renderQuestion(){
const data=questions[current];
questionNumber.textContent=`QUESTION ${String(current+1).padStart(2,"0")}`;
questionCount.textContent=`Question ${current+1} of ${questions.length}`;
question.textContent=data[0];
options.innerHTML="";
data[1].forEach((text,index)=>{
const wrapper=document.createElement("div");
wrapper.className="option";
const input=document.createElement("input");
input.type="radio";
input.name="mockAnswer";
input.id=`option${index}`;
input.value=index;
input.checked=answers[current]===index;
const label=document.createElement("label");
label.htmlFor=`option${index}`;
const letter=document.createElement("span");
letter.className="option-letter";
letter.textContent=String.fromCharCode(65+index);
label.appendChild(letter);
label.appendChild(document.createTextNode(text));
wrapper.appendChild(input);
wrapper.appendChild(label);
options.appendChild(wrapper);
input.addEventListener("change",()=>{
answers[current]=Number(input.value);
nextBtn.disabled=false;
submitBtn.disabled=false;
});
});
previousBtn.style.display=current===0?"none":"block";
nextBtn.style.display=current===questions.length-1?"none":"block";
submitBtn.style.display=current===questions.length-1?"block":"none";
const hasAnswer=answers[current]!==null;
nextBtn.disabled=!hasAnswer;
submitBtn.disabled=!hasAnswer;
[...progress.children].forEach((dot,index)=>dot.classList.toggle("active",index<=current));
}

function moveNext(){
if(answers[current]===null)return;
if(current<questions.length-1){
current++;
renderQuestion();
}
}

function movePrevious(){
if(current>0){
current--;
renderQuestion();
}
}

function submitTest(){
if(submitted||answers[current]===null)return;
submitted=true;
clearInterval(countdown);
const answered=answers.filter(answer=>answer!==null).length;
localStorage.setItem("mockAnswered",answered);
localStorage.setItem("mockTotal",questions.length);
localStorage.setItem("mockCompleted","true");
window.location.href="/performance-tracking";
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

previousBtn.addEventListener("click",movePrevious);
nextBtn.addEventListener("click",moveNext);
submitBtn.addEventListener("click",submitTest);

renderQuestion();
updateTimer();
countdown=setInterval(updateTimer,1000);