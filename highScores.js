const highScoresList = document.querySelector("#highScoresList")
const highScores = JSON.parse(localStorage.getItem("highScores")) || []


/* retrieve and grab stored highscores into an unordered html list */
highScoresList.innerHTML =
highScores.map(score => {
    return '<li class="high-score">${score.name} - ${score.score}</li>'
}).join("")