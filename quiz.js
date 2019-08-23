let start = function()  {


let correct = 0;
let incorrect = 0;
let question = 'none';
let userAnswer = 'none';
let correctAnswer = 'none';

//to ask questions
let ask = function()  {
    userAnswer= prompt(question);
}

//to get the score
let score = function()   {
    if(userAnswer == correctAnswer)  {
        correct= correct+1;
        alert("correct");
    } else {
        incorrect= incorrect+1;
        alert("incorrect");
    }
}

let both = function() {
    ask();
    score();

}


alert("Welcome to my test, you will be answering 5 questions");

question: "What is 10/2?"; 
correctAnswer: "5";
both();
question: 'What is 20/10?';    
correctAnswer: "2";
both();
question: 'What is 200/10?';
correctAnswer: "20";
both();
question: 'What is 250/50?';
correctAnswer: "5";
both();
question: 'What is 80/10?';
correctAnswer: "8";
both();

/*
{     question "What is 10/2?" ,
     answers: {
       a: '3',
       b: '5',
       c: '4'
},
correctAnswer: 'b'
both();
},
alert
{ 
    question: 'What is 20/10?',
   answers: {  
   a: '10',
   b: '2',
   c: '23'

},
correctAnswer: 'b'
both();
},

{ 
    question: 'What is 200/10?',
   answers: {  
   a: '10',
   b: '2',
   c: '20'

},
correctAnswer: 'c'
both();
},

{ 
    question: 'What is 250/50?',
   answers: {  
   a: '5',
   b: '2',
   c: '23'

},
correctAnswer: 'a'
both();
},

{ 
    question: 'What is 80/10?',
   answers: {  
   a: '10',
   b: '8',
   c: '23'

},
correctAnswer: 'b'
both();
}
*/


alert(`Well done, you got ${correct} out of 5`);
};

        var pushbar = new Pushbar({
              blur:true,
              overlay:true,
            });
      
































