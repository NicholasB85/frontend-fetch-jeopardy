let questionPlace = document.getElementById("question")
let questionCountDisplay = document.getElementById("count")
let questionTotalPoints = document.getElementById("value")
let questionCount = 0
let randomObject = {}
let button = document.getElementById("button")
let totalPointsEarned = 0
let totalPointsPossible = 0
button.addEventListener('click', compareAnswer)
fetchQuestion()
questionCountDisplay.textContent = questionCount
questionTotalPoints.textContent = totalPointsPossible

function fetchQuestion() {
    fetch("http://jservice.io/api/random")
        .then(responseObject => responseObject.json())
        .then(hydrateBody => {
            questionPlace.innerHTML = hydrateBody[0].question
            randomObject = hydrateBody[0]
        })
}

function compareAnswer() {
    let userAnswer = document.getElementById("input").value
    userAnswer.toLowerCase()
    questionCount += 1
   
    let points = document.getElementById("points")

    if (userAnswer.toLowerCase() === randomObject.answer.toLowerCase()) {
        totalPointsEarned += randomObject.value
        points.textContent = totalPointsEarned
        alert("Your answer is correct.  Points: " + randomObject.value)
    } else {
        alert("Correct answer was '" + randomObject.answer + "' Your answer was '" + userAnswer + " '")
    }
    totalPointsPossible += randomObject.value
    questionCountDisplay.textContent = questionCount
    questionTotalPoints.textContent = totalPointsPossible
    fetchQuestion()

}