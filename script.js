import questions from './questions.js';
// Questions, Options[], answer

// Variables
let currentQuestion = document.querySelector('.question'); // question
let currentOptions = document.querySelector('.options'); // options[]

let question = questions.map(q => q.question)
console.log(question)
let options = questions.map(q => q.options)
console.log(options)
let answers = questions.map(q => q.answer)
console.log(answers)

let questionArea = document.querySelector('.questionArea')

let rightQuestions = 0

// Events



// Functions
const showQuestions = () => {
    questionArea.style.display = "block";
    for (let i = 0; i < questions.length; i++) {
        currentQuestion.textContent = question[i]
        for (let j = 0; j < options[i].length; j++) {
            // Corrigido: usar document.createElement em vez de questionArea.createElement
            let optDiv = document.createElement('div');
            optDiv.classList.add('options'); // Nome da classe corrigido
            optDiv.innerHTML = `<span>${j + 1}</span> ${options[i][j]}`; // Usar [j] em vez de [1]

            // Adicionar a div criada ao questionArea
            questionArea.appendChild(optDiv);

            // Adicionar evento de clique para cada opção
            optDiv.addEventListener('click', () => {
                // Lógica para lidar com a resposta selecionada
                let selectedAnswer = options[i][j];
                console.log(`Resposta selecionada: ${selectedAnswer}`);
                if (selectedAnswer === answers[i]) {
                    rightQuestions++;
                }
                console.log(`Número de respostas corretas: ${rightQuestions}`);
                // Lógica para passar para a próxima pergunta
                questionArea.style.display = "none";
                currentQuestion.textContent = "";
                currentOptions.textContent = "";
                showQuestions();
            });
        }
    }
}

// Script
showQuestions()

/* 
Mostrar o display, pessoa escolhe, salva a resposta, muda a porcentagem da barra, esconde display, troca pergunta, mostra display...
*/