// chart.js

document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('sleepOscillationChart').getContext('2d');
    var sleepOscillationChart = new Chart(ctx, {
        type: 'line', // Type of chart: Line chart for oscillation
        data: {
            labels: ['10PM', '11PM', '12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM'], // Time intervals
            datasets: [{
                label: 'Sleep Oscillation',
                data: [0, 2, 4, 2, 0, -2, -4, -2, 0], // Example data: replace with your sleep data
                backgroundColor: 'rgba(0, 178, 169, 0.2)',
                borderColor: 'rgba(0, 178, 169, 1)',
                borderWidth: 2,
                fill: false,
                tension: 0.1 // Smooth curves
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
