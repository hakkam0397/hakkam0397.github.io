document.getElementById('sleepDetails').addEventListener('click', function () {
    const overlay = document.getElementById('sleepDetails');
    overlay.classList.add('active');

    setTimeout(function () {
        window.location.href = 'sleepDetails.html'; // Replace with your actual new page URL
    }, 500); // Duration should match the CSS transition duration
});