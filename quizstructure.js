alert("Welcome to my test. You will be answering 5 questions");

let geneate = function (questions, quizContainer, resultsContainer, submitButton)   { 
    function buildTest(questions, quizContainer)   {

        const output = [];

        myQuestions.forEach(
          (currentQuestion, questionNumber) => {
      
const answers = [];

for(letter in currentQuestion.answers){
  answers.push(
    `<label>
      <input type= "radio" name="question ${questionNumber}" value= "${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}
output.push(
    `<div class= 'slide'> 
    <div class= "question">${currentQuestion.question} </div>
    <div class= "answers">${answers.join("")} </div>`  
);
  });
        
quizContainer.innerHTML = output.join("");
    }

    function showResults(questions, quizContainer, resultsContainer)   {
        const answerContainers = quizContainer.querySelectorAll('.answers');
    
        let numCorrect = 0;

        myQuestions.forEach((currentQuestion,questionNumber)=> {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question                ${questionNumber}]: checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                answerContainers[questionNumber].style.color = 'lightgreen';

            } else {
                answerContainers[questionNumber].style.color ='red';
            }
        });
        resultsContainer.innerHTML = `${numCorrect} out of 
        ${myQuestions.length}`;
    }

    
const quizContainer = document.getElementById('test');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


const myQuestions = [
    {
     question: "What is 10/2?" ,
     answers: {
       a: '3',
       b: '5',
       c: '4'
},
correctAnswer: 'b'
},

{ 
    question: 'What is 20/10?',
   answers: {  
   a: '10',
   b: '2',
   c: '23'

},
correctAnswer: 'b'
},

{ 
    question: 'What is 200/10?',
   answers: {  
   a: '10',
   b: '2',
   c: '20'

},
correctAnswer: 'c'
},

{ 
    question: 'What is 250/50?',
   answers: {  
   a: '5',
   b: '2',
   c: '23'

},
correctAnswer: 'a'
},

{ 
    question: 'What is 80/10?',
   answers: {  
   a: '10',
   b: '8',
   c: '23'

},
correctAnswer: 'b'
}
];
buildTest(questions, quizContainer);
submitButton.addEventListener("click", showResults);


}) ();


function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide===0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide===slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  showSlide(0);

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showPreviousSlide()  {
    showPreviousSlide(currentSlide - 1);
}

function showNextslide()   {
    showSlide(currentSlide + 1)
}

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);




