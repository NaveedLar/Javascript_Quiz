const quizDB = [ 
{
	question: "Q1: What is  the full form of HTML?" ,
	a: "Hey Text Markup Language" ,
	b: "Hello to My Land" ,
	c: "Hypertest Makeup Language" ,
	d: "HyperText Markup Language" ,
	ans: "ans4"
},
{
	question: "Q2: What is  the full form of CSS?" ,
	a: "Cascading Style Sheet" ,
	b: "Cascading style Sheep" ,
	c: "Cartoon Style Sheets" ,
	d: "Cascading Super Sheets" ,
	ans: "ans1"
},
{
	question: "Q3: What is  the full form of HTTP?" ,
	a: "Hypertest Transfer Product" ,
	b: "Hypertext Test Protocol" ,
	c: "Hey Transfer Protocol" ,
	d: "Hypertext Transfer Protocol" ,
	ans: "ans4"
},
{
	question: "Q4: What is  the full form of JS?" ,
	a: "JavaScript" ,
	b: "JavaSuper" ,
	c: "JustScript" ,
	d: "JordenShoes" ,
	ans: "ans1"
},

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

	const questionList = quizDB[questionCount];

	question.innerText = questionList.question;

	option1.innerText = questionList.a;
	option2.innerText = questionList.b;
	option3.innerText = questionList.c;
	option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () =>{
	let answer;

	answers.forEach((curAnsElem) => {
		if (curAnsElem.checked) {
			answer = curAnsElem.id;
		}
         
	});
	 return answer; 
};
 const deselectAll = () =>{
 	answers.forEach((curAnsElem) => curAnsElem.checked = false);
 }

submit.addEventListener('click' ,() =>{
	const checkedAnswer = getCheckAnswer();
	console.log(checkedAnswer);
console.log(questionCount)
if(quizDB[questionCount]){

}
	if (checkedAnswer ==quizDB[questionCount].ans) {
		console.log("checked Answer")
		score++;
	};
    
    questionCount++;

    deselectAll();
    if (questionCount<quizDB.length) {
    	loadQuestion();
    }
    else{
        console.log("Else")
        showScore.innerHTML =`
             <h3> You score ${score}/${quizDB.length} </h3>
             <button class="btn" onclick="location.reload()">play Again</button>
         `;
         //showScore.classlist.remove('scoreArea');

            }
});