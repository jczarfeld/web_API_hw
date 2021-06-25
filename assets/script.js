var time = questions.length *15;
var currentQuestionIndex = 0;




var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");
var startScreen = document.querySelector("")
var titleElement = document.querySelector("#question-title");


function beginQuiz () {
    startScreen.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");

}
funcion getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    titleElement.textContent = currentQuestion.title;
    questionChoices.textContent= ""

        for (var i=0; )
   
}




startBtn.addEventListener("click", beginQuiz);