// app.js

// Author: Dhruv Mehta

// Function to format phone number as user types
function formatPhoneNumber(input) {
    // Remove all non-digit characters
    let phoneNumber = input.value.replace(/\D/g, '');
    
    // Format the number as (XXX) XXX-XXXX
    if (phoneNumber.length > 0) {
        if (phoneNumber.length <= 3) {
            phoneNumber = `(${phoneNumber}`;
        } else if (phoneNumber.length <= 6) {
            phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        } else {
            phoneNumber = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
        }
    }
    
    // Update the input value
    input.value = phoneNumber;
}

// Function to validate phone number
function validatePhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    
    // Check if the number is exactly 10 digits
    return cleanNumber.length === 10;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const phoneInput = document.querySelector('input[type="text"]');
    const phoneNumber = phoneInput.value;
    
    if (validatePhoneNumber(phoneNumber)) {
        // Phone number is valid, proceed with submission
        localStorage.setItem('phoneNumber', phoneNumber);
        window.location.href = 'otp.html';
    } else {
        // Phone number is invalid, show error message
        alert('Please enter a valid 10-digit phone number.');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.querySelector('input[type="text"]');
    const submitButton = document.querySelector('.button');
    
    // Add event listener for input formatting
    phoneInput.addEventListener('input', function() {
        formatPhoneNumber(this);
    });
    
    // Add event listener for form submission
    submitButton.addEventListener('click', handleSubmit);
});

