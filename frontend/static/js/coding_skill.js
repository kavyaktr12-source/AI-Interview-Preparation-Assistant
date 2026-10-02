const questions=[
["Given an array of integers, find the length of the longest contiguous subarray whose sum equals zero."],
["Given a string, find the first non-repeating character and return its index. If it does not exist, return -1."],
["Given an array of integers, find the maximum sum of any contiguous subarray."],
["Given two strings, determine whether they are anagrams of each other."],
["Given an integer array, find all duplicate elements without using extra space apart from the output."]
];

let current=0;
let answers=Array(questions.length).fill("");
let timeLeft=30*60;
let submitted=false;
let countdown;

const question=document.getElementById("question");
const questionNumber=document.getElementById("questionNumber");
const questionCount=document.getElementById("questionCount");
const progress=document.getElementById("progress");
const previousBtn=document.getElementById("previousBtn");
const nextBtn=document.getElementById("nextBtn");
const submitBtn=document.getElementById("submitBtn");
const timer=document.getElementById("timer");
const codeEditor=document.getElementById("codeEditor")||document.querySelector("textarea");

questions.forEach(()=>{
const dot=document.createElement("span");
progress.appendChild(dot);
});

function isValidCodingAnswer(answer,index){
const text=answer.trim().toLowerCase();
if(text.length<25)return false;
if(/^(hello|hi|hey|test|testing|abc|abcd|asdf|random|nothing|no idea|dont know|i don't know|ok|okay|yes|no|good|fine|sample|answer|code)$/i.test(text))return false;
const programmingPattern=/\b(for|while|if|else|return|function|def|class|int|string|char|array|list|dict|set|map|hash|hashmap|index|length|loop|sort|search|stack|queue|pointer|variable|algorithm|complexity|time|space|python|java|c\+\+|javascript)\b|[{}[\]();=<>]/i;
if(!programmingPattern.test(text))return false;
const keywords=[
["subarray",["subarray","sum","prefix","hash","dictionary","map","zero","index"]],
["non-repeating",["non-repeating","frequency","count","character","string","hash","dictionary","map"]],
["maximum sum",["maximum","sum","subarray","kadane","current","max"]],
["anagrams",["anagram","frequency","count","sort","string","character"]],
["duplicate",["duplicate","set","hash","frequency","array","index","output"]]
];
const required=keywords[index][1];
const matches=required.filter(word=>text.includes(word)).length;
return matches>=2;
}

function renderQuestion(){
const data=questions[current];
questionNumber.textContent=`QUESTION ${String(current+1).padStart(2,"0")}`;
questionCount.textContent=`${current+1} / ${questions.length}`;
question.textContent=data[0];
codeEditor.value=answers[current]||"";
previousBtn.style.display=current===0?"none":"block";
nextBtn.style.display=current===questions.length-1?"none":"block";
submitBtn.style.display=current===questions.length-1?"block":"none";
const hasAnswer=codeEditor.value.trim()!=="";
nextBtn.disabled=!hasAnswer;
submitBtn.disabled=!hasAnswer;
[...progress.children].forEach((dot,index)=>dot.classList.toggle("active",index<=current));
}

function saveAnswer(){
answers[current]=codeEditor.value;
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
const validAnswers=answers.map((answer,index)=>isValidCodingAnswer(answer,index));
const validCount=validAnswers.filter(Boolean).length;
const answeredCount=answers.filter(answer=>answer.trim()!=="").length;
const hasValidCoding=validCount>0;
localStorage.setItem("codingScore",validCount);
localStorage.setItem("codingTotal",questions.length);
localStorage.setItem("codingAnswered",answeredCount);
localStorage.setItem("codingValidAnswers",validCount);
localStorage.setItem("codingCompleted","true");
localStorage.setItem("codingValid",hasValidCoding?"true":"false");
window.location.href="/personal-interview";
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

codeEditor.addEventListener("input",()=>{
answers[current]=codeEditor.value;
const hasAnswer=codeEditor.value.trim()!=="";
nextBtn.disabled=!hasAnswer;
submitBtn.disabled=!hasAnswer;
});

previousBtn.addEventListener("click",movePrevious);
nextBtn.addEventListener("click",moveNext);
submitBtn.addEventListener("click",submitTest);

renderQuestion();
updateTimer();
countdown=setInterval(updateTimer,1000);