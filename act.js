var myQuestions = [
  {
    question: "1.Qual a função da fonte no circuito?",
    answers: {
      a: 'medir a tenção nos componentes.',
      b: 'medir a corrente nos componentes.',
      c: 'alimentar os componentes com energia.',
      d: 'mediar a corrente.'
    },
    correctAnswer: 'c'
  },

  {
      question: "2.Que valores as portas digitais do Arduino conseguem medir?",
      answers: {
        a: 'valores diferentes de 1 e 0.',
        b: 'valores semelhantes a 1 e 0.',
        c: 'valores diferentes de 0 e 10.',
        d: 'valores iguais a 1 e 2.'
      },
      correctAnswer: 'b'
  },

  {
      question: "3.Para que serve a porta pwm no Arduino?",
      answers: {
        a: 'assimilar e medir ondas produzidas durante o trabalho do Arduino.',
        b: 'receber a energia voltada ao Arduino.',
        c: 'estabelecer as conexões do Arduino com aparelhos externos.',
        d: 'dividir as funções de cada porta no Arduino.'
      },
      correctAnswer: 'a'
  },

  {
      question: "4.Qual a ponte utilizada para a construção do motor do Arduino? ",
      answers: {
        a: 'HJ263C.',
        b: 'HL292C.',
        c: 'HL293D.',
        d: 'HJ292D.'
      },
      correctAnswer: 'c'
    },

    {
      question: "5.Qual o projeto final do PAC?",
      answers: {
        a: 'Robô de sumô.',
        b: 'Robô de combate.',
        c: 'Robô trekking.',
        d: 'Robô seguidor de linha.'
      },
      correctAnswer: 'd'
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var restartButton = document.getElementById('restart');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton, restartButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton, restartButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;
      
    for(var i=0; i<questions.length; i++){
      
      answers = [];
    
    for(letter in questions[i].answers){

        answers.push(
          '<label>'
            +'<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    var userAnswer = '';
    var numCorrect = 0;
    
    for(var i=0; i<questions.length; i++){

      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      if(userAnswer===questions[i].correctAnswer){
        numCorrect++;
        
        answerContainers[i].style.color = 'lightgreen';
      }
      else{
        answerContainers[i].style.color = 'red';
      }
    }

    resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
  }

  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

  restartButton.onclick = function(){
    document.location.reload(true)
  }

}