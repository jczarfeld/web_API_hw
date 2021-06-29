// first, link into the input boxes on the html doc

const question = document.querySelector("#question");
const scoreText = document.querySelector("#score");
const options = Array.from(document.querySelectorAll(".option-text"));
const progressText = document.querySelector("#progressText");




// set these values to a default starting point so that all questions get read and don't repeat

let currentQ = {}
let acceptAnswers = true
let score = 0
let qCounter = 0
let remainingQs = []


// one large array with questions containing the available options and the correct answer 
let questions = [{
        question: "What is my favorite food?",
        option1: "Hot Dog",
        option2: "Sludge",
        option3: "Root Beer?",
        option4: "Pizza time",
        answer: 4,
    },
    {
        question: "What is your favorite food?",
        option1: "Calcium Chews",
        option2: "Diet Dr. Sludge",
        option3: "Root Beer?",
        option4: "Eggs Benedryll",
        answer: 1,
    },
    {
        question: "Do you think we could be friends?",
        option1: "Yes",
        option2: "Joey from Friends was dead the whole time",
        option3: "Try Again",
        option4: "No sludgin' way",
        answer: 2,
    },
    {
        question: "What's the best advice my friend Rebecca ever recieved?",
        option1: "Rob a Sludge Factory",
        option2: "Seriously, what's with all the Sludge?",
        option3: "Start giving vultures their justifiably earned respect",
        option4: "You don't really want to be my friend anyway",
        answer: 3,
    }
]


// Increase score by 15 for now, need to decrese later. set a maximum on questions so the array doesn't start to repeat
const SCORE_PTS = 15
const MAX_QS = 4


// These functions cycle through the questions, stores the score and moves to another web page when all of them have been answered

startGame = () => {
    qCounter = 0
    score = 0
    remainingQs = [...questions]
    getNewQuestion()
}



getNewQuestion = () => {
    if (remainingQs.length === 0 || qCounter > MAX_QS) {
        localStorage.setItem("myRecentScore", score)
        return window.location.href = "enterName.html"
    }


    //I might move the scoreBar alltogether because I dont really need it and it is giving me trouble 
    qCounter++




    // This randomly selects one of the questions from the array 

    const quizIndex = Math.floor(Math.random() * remainingQs.length)
    currentQ = remainingQs[quizIndex]
    question.innerText = currentQ.question


    // input the questions into the html area 
    options.forEach(option => {
        const number = option.dataset["number"]
        option.innerText = currentQ["option" + number]

    })
    remainingQs.splice(quizIndex, 1)

    acceptAnswers = true

}


// this is to check if the answers are true, and it is supposed to switch the styling to visually show green or red on click
options.forEach(option => {
    option.addEventListener("click", e => {
        if (!acceptAnswers) return

        acceptAnswers = false
        const selectedOption = e.target
        const selectedAnswer = selectedOption.dataset["number"]

        let classToApply = selectedAnswer == currentQ.answer ? 'correct' :
            'incorrect'
        // I got the scoring to change, but not the green and red coloring 
        if (classToApply === 'correct') {
            incrementScore(SCORE_PTS)

        } else {
            decrementScore(SCORE_PTS)
        }

        selectedOption.parentElement.classList.add(classToApply)
        // resets the color back to default and gives me the next question, assuming I haven't answered the max
        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)

    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score

    decrementScore = num => {
        score -= num
        scoreText.innerText = score
    }
}

startGame()

var timeEl = document.querySelector(".time");


var mainEl = document.getElementById("main");

var secondsLeft = 30;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left.";

        if (secondsLeft === 0) {

            clearInterval(timerInterval);

            sendMessage();
        }

    }, 1000);
}


function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "who's.jpg");
    mainEl.appendChild(imgEl);
    return window.location.href = "enterName.html";

}

setTime();