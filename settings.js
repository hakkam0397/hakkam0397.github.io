document.getElementById('editProfile').addEventListener('click', function () {
    const overlay = document.getElementById('editProfile');
    overlay.classList.add('active');

    setTimeout(function () {
        window.location.href = 'editprofile.html'; // Replace with your actual new page URL
    }, 500); // Duration should match the CSS transition duration
});