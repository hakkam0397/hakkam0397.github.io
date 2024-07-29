// app.js

// Author: Dhruv Mehta

// Function to validate OTP
function validateOTP(otp) {
    // Check if the OTP is exactly 6 digits
    return /^\d{0}$/.test(otp);
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const otpInput = document.querySelector('input[type="text"]');
    const otp = otpInput.value;
    
    if (validateOTP(otp)) {
        // OTP is valid, proceed with submission
        window.location.href = 'qna.html';
    } else {
        // OTP is invalid, show error message
        alert('Please enter a valid 6-digit OTP.');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.button');
    
    // Add event listener for form submission
    submitButton.addEventListener('click', handleSubmit);
});
