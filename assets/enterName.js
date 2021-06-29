const username = document.querySelector("#username")
const finalScore = document.querySelector("#finalScore")

const myRecentScore= localStorage.getItem("myRecentScore")
const saveScoreBtn = document.querySelector("#saveScoreBtn")


/* parse this value and then locally store it to be retrieved later  show current score now. total of 5 can be stored*/

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

const MAX_HIGH_SCORES = 5
finalScore.innerText = myRecentScore

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value
})
/*Prevent the page from automatically reloading upon recieving user input */
saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: myRecentScore,
        name: username.value
    }

    /* move scores onto high score list, and list them in order */

    highScores.push(score)

    highScores.sort((a, b) => {
        return b.score - a.score
    })

    /* only take the top 5 scores from the new list */

    highScores.splice(5)

    /* store highscores after converting them into a string */

    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.assign("highScores.html")
}