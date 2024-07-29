// app.js

// Author: Dhruv Mehta

// Array to store sign-up methods
const signUpMethods = ['Google', 'Apple', 'Facebook', 'Phone'];

// Object to store user information
let user = {
    name: '',
    email: '',
    signUpMethod: ''
};

// Function to display sign-up options
function displaySignUpOptions() {
    const signUpContainer = document.querySelector('.cell.small-6');
    
    signUpMethods.forEach(method => {
        const button = document.createElement('a');
        button.href = `https://www.${method.toLowerCase()}.com/`;
        button.className = 'hollow button';
        button.textContent = `Sign in with ${method}`;
        button.onclick = (e) => {
            e.preventDefault();
            selectSignUpMethod(method);
        };
        signUpContainer.appendChild(button);
    });
}

// Function to handle sign-up method selection
function selectSignUpMethod(method) {
    user.signUpMethod = method;
    document.getElementById('top-heading').textContent = `Sign up with ${method}`;
    showSignUpForm();
}

// Function to display sign-up form
function showSignUpForm() {
    const formHtml = `
        <form id="signUpForm">
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <button type="submit" class="button">Create Account</button>
        </form>
    `;
    
    const container = document.querySelector('.cell.small-6');
    container.innerHTML = formHtml;
    
    document.getElementById('signUpForm').addEventListener('submit', handleFormSubmit);
}

// Function to handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    user.name = document.getElementById('name').value;
    user.email = document.getElementById('email').value;
    
    displayUserInfo();
}

// Function to display user information
function displayUserInfo() {
    const infoHtml = `
        <h2>Welcome, ${user.name}!</h2>
        <p>Your account has been created with the following details:</p>
        <ul>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
            <li>Sign-up method: ${user.signUpMethod}</li>
        </ul>
    `;
    
    const container = document.querySelector('.cell.small-6');
    container.innerHTML = infoHtml;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displaySignUpOptions();
    $(document).foundation(); // Initialize Foundation
});

