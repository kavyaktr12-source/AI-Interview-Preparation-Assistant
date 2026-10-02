const questions=[
["DATA SCIENCE","In a highly imbalanced binary classification problem, which metric is generally more informative than accuracy?",["ROC-AUC only","F1-score","Mean Squared Error","R-squared"],1],
["DATA SCIENCE","Which statistical test is most appropriate for comparing the means of two independent groups when their variances may be unequal?",["Paired t-test","Welch's t-test","Chi-square test","Z-test"],1],
["DATA SCIENCE","What is the primary purpose of stratified sampling?",["Increase the dataset size","Preserve important subgroup proportions","Remove duplicate records","Reduce feature dimensions"],1],
["DATA SCIENCE","Which scaling technique is generally more robust to extreme outliers?",["StandardScaler","Min-Max Scaling","Robust Scaling","Binary Encoding"],2],
["DATA SCIENCE","What is the main purpose of Principal Component Analysis?",["Increase the number of features","Reduce dimensionality while preserving variance","Remove all categorical variables","Increase model complexity"],1],
["DATA SCIENCE","A very small p-value in a hypothesis test generally provides evidence that:",["The null hypothesis is certainly true","The observed data is unlikely under the null hypothesis","The sample size is zero","The model has perfect accuracy"],1],
["DATA SCIENCE","Which sampling method gives every member of a population an equal probability of selection?",["Cluster sampling","Systematic sampling","Simple random sampling","Convenience sampling"],2],
["DATA SCIENCE","Why is cross-validation commonly used during model development?",["To increase the training dataset permanently","To estimate model performance on unseen data","To remove missing values","To convert categorical variables"],1],
["DATA SCIENCE","Which measure of central tendency is generally least affected by extreme outliers?",["Mean","Median","Variance","Standard deviation"],1],
["DATA SCIENCE","In Bayesian inference, what does the posterior distribution represent?",["Prior belief only","Updated belief after observing evidence","Random noise only","Training error"],1],
["DATA ANALYSIS","Which SQL operation combines rows from two tables based on a related column?",["JOIN","GROUP BY","ORDER BY","DISTINCT"],0],
["DATA ANALYSIS","Which SQL clause is used to group rows having the same values in selected columns?",["WHERE","GROUP BY","HAVING","LIMIT"],1],
["DATA ANALYSIS","Which SQL clause is used to filter grouped results after aggregation?",["WHERE","FROM","HAVING","ORDER BY"],2],
["DATA ANALYSIS","What does SELECT DISTINCT do in SQL?",["Sorts records","Removes duplicate result rows","Deletes duplicate records","Groups numeric values"],1],
["DATA ANALYSIS","Which JOIN returns all rows from the left table and matching rows from the right table?",["INNER JOIN","RIGHT JOIN","LEFT JOIN","CROSS JOIN"],2],
["DATA ANALYSIS","What is the primary purpose of a database index?",["Increase duplicate records","Speed up data retrieval","Delete unused columns","Encrypt the database"],1],
["DATA ANALYSIS","Which visualization is most suitable for examining the relationship between two numerical variables?",["Pie chart","Scatter plot","Histogram only","Box plot only"],1],
["DATA ANALYSIS","What is normalization commonly used for in data preprocessing?",["Making values comparable across different scales","Removing all records","Increasing missing values","Changing labels into images"],0],
["DATA ANALYSIS","Which pandas function is commonly used to concatenate DataFrames along an axis?",["merge()","concat()","join_only()","append_sql()"],1],
["DATA ANALYSIS","Pearson correlation coefficient primarily measures:",["Causal relationship","Linear relationship between numerical variables","Number of missing values","Class imbalance"],1],
["MACHINE LEARNING","What is the main purpose of regularization in machine learning?",["Increase overfitting","Reduce overfitting by penalizing model complexity","Remove the target variable","Increase training noise"],1],
["MACHINE LEARNING","Which regularization technique can force some linear regression coefficients exactly to zero?",["Ridge","Lasso","Elastic Scaling","Dropout"],1],
["MACHINE LEARNING","Why is feature scaling important for K-Nearest Neighbors?",["KNN uses distance calculations","KNN cannot use numerical data","Scaling increases class labels","Scaling removes all outliers"],0],
["MACHINE LEARNING","Which algorithm classifies a new sample based on the labels of nearby training samples?",["KNN","Naive Bayes","Linear Regression","PCA"],0],
["MACHINE LEARNING","What is the primary purpose of a validation set?",["Train the final model only","Tune model choices and hyperparameters","Replace the test set permanently","Store duplicate samples"],1],
["MACHINE LEARNING","Which technique combines multiple weak learners sequentially to create a stronger model?",["Bagging only","Boosting","PCA","Clustering"],1],
["MACHINE LEARNING","In a decision tree, entropy is primarily used to measure:",["Model size","Impurity or uncertainty in a node","Training speed","Number of features"],1],
["MACHINE LEARNING","Which kernel is commonly associated with Support Vector Machines for nonlinear classification?",["Linear kernel only","RBF kernel","SQL kernel","Random kernel"],1],
["MACHINE LEARNING","A model performs extremely well on training data but poorly on unseen data. This is usually:",["Underfitting","Overfitting","Normalization","Sampling"],1],
["MACHINE LEARNING","What is the main purpose of SMOTE?",["Reduce the number of features","Generate synthetic samples for minority classes","Remove all minority samples","Normalize numerical values"],1],
["ARTIFICIAL INTELLIGENCE","What is the purpose of early stopping during neural network training?",["Increase training indefinitely","Stop training when validation performance stops improving","Remove the validation set","Increase overfitting"],1],
["ARTIFICIAL INTELLIGENCE","Which activation function is commonly used in hidden layers because it helps reduce the vanishing gradient problem?",["ReLU","Sigmoid only","Linear only","Softmax only"],0],
["ARTIFICIAL INTELLIGENCE","What is backpropagation primarily used for?",["Initializing the dataset","Computing gradients for updating neural network weights","Deleting neurons","Generating database tables"],1],
["ARTIFICIAL INTELLIGENCE","Which neural network architecture is specifically designed to process sequential data?",["CNN","RNN","K-Means","Decision Tree"],1],
["ARTIFICIAL INTELLIGENCE","Which function is commonly used in the output layer for multi-class classification?",["ReLU","Softmax","Tanh only","Linear regression"],1],
["ARTIFICIAL INTELLIGENCE","What is the primary purpose of dropout in neural networks?",["Increase overfitting","Reduce overfitting by randomly disabling neurons during training","Increase input dimensions","Remove the loss function"],1],
["ARTIFICIAL INTELLIGENCE","In reinforcement learning, an agent generally tries to maximize:",["Number of input features","Cumulative reward","Training dataset size","Number of parameters"],1],
["ARTIFICIAL INTELLIGENCE","What is the main purpose of pooling layers in convolutional neural networks?",["Increase image dimensions","Reduce spatial dimensions and computation","Create labels","Remove the convolution operation"],1],
["ARTIFICIAL INTELLIGENCE","Which problem occurs when gradients become extremely small as they propagate through deep networks?",["Exploding labels","Vanishing gradient problem","Data normalization","Feature leakage"],1],
["PYTHON","What is the average-case time complexity of dictionary key lookup in Python?",["O(1)","O(n)","O(n²)","O(log n)"],0],
["PYTHON","Which keyword is used inside a Python function to produce values lazily?",["return","yield","generate","lazy"],1],
["PYTHON","What is a closure in Python?",["A function that remembers variables from its enclosing scope","A closed database connection","A type of loop","A protected class"],0],
["PYTHON","Which Python data type is immutable?",["List","Dictionary","Tuple","Set"],2],
["PYTHON","What is the main purpose of the __repr__ method?",["Define a developer-oriented string representation of an object","Delete an object","Create a database","Start a thread"],0],
["PYTHON","What is the Global Interpreter Lock commonly associated with?",["Python's CPython implementation","MySQL","HTML","CSS"],0],
["PYTHON","Which construct is commonly used to handle exceptions in Python?",["try-except","if-else only","switch-case","for-catch"],0],
["PYTHON","What is the average-case time complexity of membership testing in a Python set?",["O(1)","O(n)","O(n²)","O(log n)"],0],
["PYTHON","Which syntax creates a list using a compact expression in Python?",["List comprehension","Tuple declaration","Dictionary join","Generator class"],0],
["PYTHON","Which Python module provides regular expression operations?",["math","re","regexlib","pattern"],1],
["PYTHON","What is the main purpose of a Python virtual environment?",["Isolate project dependencies","Increase monitor resolution","Replace Python","Store database records"],0]
];

let current=0;
let answers=Array(questions.length).fill(null);
let timeLeft=60*60;
let submitted=false;
let countdown;

const question=document.getElementById("question");
const category=document.getElementById("category");
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
questionCount.textContent=`${current+1} / ${questions.length}`;
category.textContent=data[0];
question.textContent=data[1];
options.innerHTML="";
data[2].forEach((optionText,index)=>{
const wrapper=document.createElement("div");
wrapper.className="option";
const input=document.createElement("input");
input.type="radio";
input.name="answer";
input.id=`option${index}`;
input.value=index;
const label=document.createElement("label");
label.htmlFor=`option${index}`;
const letter=document.createElement("span");
letter.className="option-letter";
letter.textContent=String.fromCharCode(65+index);
const text=document.createElement("span");
text.textContent=optionText;
label.appendChild(letter);
label.appendChild(text);
wrapper.appendChild(input);
wrapper.appendChild(label);
options.appendChild(wrapper);
input.addEventListener("change",()=>{
answers[current]=Number(input.value);
nextBtn.disabled=false;
submitBtn.disabled=false;
});
});
if(answers[current]!==null){
const selected=document.querySelector(`input[value="${answers[current]}"]`);
if(selected)selected.checked=true;
}
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
if(submitted)return;
if(answers[current]===null)return;
submitted=true;
clearInterval(countdown);
let score=0;
answers.forEach((answer,index)=>{
if(answer===questions[index][3])score++;
});
localStorage.setItem("technicalScore",score);
localStorage.setItem("technicalTotal",questions.length);
localStorage.setItem("technicalAnswered",answers.filter(answer=>answer!==null).length);
localStorage.setItem("technicalCompleted","true");
window.location.href="/coding-skill";
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