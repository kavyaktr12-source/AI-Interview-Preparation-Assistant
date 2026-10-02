const questions=[
["How would you respond if your manager strongly disagreed with your proposed solution?",["I would explain my reasoning, listen to the manager's concerns, and work toward a better solution.","I would continue with my original solution because I believe it is correct.","I would immediately agree without discussing the issue further.","I would avoid the discussion and let someone else decide."]],
["How would you handle a conflict with a colleague?",["I would discuss the issue calmly, understand their perspective, and find a professional solution.","I would stop communicating with the colleague.","I would complain about the colleague to other team members.","I would ignore the problem until it becomes serious."]],
["What would you do if you were given a task with a very short deadline?",["I would prioritize the work, clarify expectations, and complete the most important parts first.","I would immediately say that the deadline is impossible.","I would wait until the last moment before starting.","I would complete the task without checking the requirements."]],
["How would you react if you received negative feedback from your manager?",["I would understand the feedback, identify areas to improve, and apply it to my work.","I would argue because I do not like negative feedback.","I would ignore the feedback completely.","I would take it personally and stop participating."]],
["What would you do if you made a serious mistake at work?",["I would take responsibility, inform the appropriate person, and focus on correcting the mistake.","I would hide the mistake to avoid criticism.","I would blame another team member.","I would wait and see if someone notices it."]],
["How would you handle working with a difficult team member?",["I would remain professional, communicate clearly, and focus on achieving the team goal.","I would avoid working with that person.","I would respond negatively to their behavior.","I would ask other team members to handle all communication."]],
["What would you do if you were assigned work outside your current knowledge?",["I would learn what is required, ask relevant questions, and complete the task responsibly.","I would refuse the task immediately.","I would submit incomplete work without learning.","I would wait for someone else to do it."]],
["How would you handle multiple important tasks at the same time?",["I would prioritize them based on urgency and impact, then create a clear plan.","I would work randomly on whichever task I notice first.","I would try to complete everything simultaneously.","I would postpone the difficult tasks."]],
["Why should a company hire you?",["I can contribute through my skills, willingness to learn, responsibility, and ability to work effectively with others.","Because I need a job more than other candidates.","Because I should receive the position regardless of my skills.","Because other candidates may not be available."]],
["Where do you see yourself in the next five years?",["I see myself developing strong expertise, taking greater responsibilities, and contributing meaningfully to the organization.","I expect to remain at exactly the same level without learning new skills.","I have no interest in developing professionally.","I mainly want a position with less responsibility."]]
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
input.name="hrAnswer";
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
localStorage.setItem("hrAnswered",answered);
localStorage.setItem("hrTotal",questions.length);
localStorage.setItem("hrCompleted","true");
window.location.href="/mock-interview";
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