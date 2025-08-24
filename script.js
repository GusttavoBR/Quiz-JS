import questions from './questions.js';
// Variables
let currentQuestion = 0;
let correctAnswer = 0






// Functions
const showQuestion = () => {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100)

        document.querySelector('.progress--bar').style.width = `${pct}%`

        document.querySelector('.scoreArea').style.display = 'none'
        document.querySelector('.questionArea').style.display = 'block'

        document.querySelector('.question').innerHTML = q.question;

        let optionsHtml = '';
        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span> ${q.options[i]} </div>`
        }
        document.querySelector('.options').innerHTML = optionsHtml

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent)
        })
    } else {
        finishQuiz()
    }
}

const optionClickEvent = (e) => {
    let clickedOption = parseInt(e.target.getAttribute('data-op'))

    if (questions[currentQuestion].answer === clickedOption) {
        correctAnswer++
    } else {

    }

    currentQuestion++
    showQuestion()
}

const finishQuiz = () => {
    let points = Math.floor((correctAnswer / questions.length) * 100)
    let percentPoints = document.querySelector('.scorePct')
    percentPoints.innerHTML = `Acertou ${points}%`
    let CongratulationsMsg = document.querySelector('.scoreText1')
    let infoAnswer = document.querySelector('.scoreText2')
    if (points < 30) {
        CongratulationsMsg.innerHTML = "Ta Ruim em"
        percentPoints.style.color = "#f00"
    } else if (points < 70) {
        CongratulationsMsg.innerHTML = "Mediano"
        percentPoints.style.color = "#ffff00"
    }

    infoAnswer.innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`

    document.querySelector('.scoreArea').style.display = 'block'
    document.querySelector('.questionArea').style.display = 'none'
    document.querySelector('.progress--bar').style.width = `100%`
}


const resetQuiz = () => {
    correctAnswer = 0
    currentQuestion = 0
    showQuestion()
}
// Events
document.querySelector('button').addEventListener('click', resetQuiz)


// Script
showQuestion()