// app.js

// Author: Dhruv Mehta

// Array of questions
const questions = [
    "What time do you usually go to bed?",
    "How many hours of sleep do you typically get?",
    "Do you have trouble falling asleep?",
    "Do you wake up during the night?"
];

// Object to store user's answers
let userAnswers = {};

// Current question index
let currentQuestionIndex = 0;

// Function to update the question
function updateQuestion() {
    const heading = document.getElementById('top-heading');
    heading.textContent = questions[currentQuestionIndex];
    
    // Update progress bar
    const progress = document.querySelector('progress');
    progress.value = ((currentQuestionIndex + 1) / questions.length) * 100;
}

// Function to handle radio button selection
function handleSelection(event) {
    const selectedValue = event.target.value;
    userAnswers[currentQuestionIndex] = selectedValue;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Store the answer for the current question
    const selectedRadio = document.querySelector('input[name="q1"]:checked');
    if (selectedRadio) {
        userAnswers[currentQuestionIndex] = selectedRadio.value;
    }
    
    // Move to the next question or finish the questionnaire
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
        resetRadioButtons();
    } else {
        finishQuestionnaire();
    }
}

// Function to reset radio buttons
function resetRadioButtons() {
    const radioButtons = document.querySelectorAll('input[name="q1"]');
    radioButtons.forEach(radio => radio.checked = false);
}

// Function to finish the questionnaire
function finishQuestionnaire() {
    const container = document.querySelector('.page-wrapper');
    container.innerHTML = `
        <h1>Thank you for completing the questionnaire!</h1>
        <p>Here are your answers:</p>
        <ul>
            ${Object.entries(userAnswers).map(([index, answer]) => 
                `<li>${questions[index]}: ${answer}</li>`
            ).join('')}
        </ul>
        <a href="index.html" class="button">Finish</a>
    `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    updateQuestion();
    
    // Add event listeners to radio buttons
    const radioButtons = document.querySelectorAll('input[name="q1"]');
    radioButtons.forEach(radio => radio.addEventListener('change', handleSelection));
    
    // Add event listener to the continue button
    const continueButton = document.querySelector('.button');
    continueButton.addEventListener('click', handleSubmit);
});

