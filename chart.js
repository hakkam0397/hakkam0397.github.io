// chart.js
//Author:Harminder Singh(8860397)

// Simulated sleep data
// 0 = Awake, 1 = Light Sleep, 2 = Deep Sleep, 3 = REM Sleep
const sleepData = [0, 1, 1, 2, 2, 2, 3, 1, 1, 0, 1, 2, 2, 3, 1, 1, 0, 1, 2, 2, 2, 3, 1, 0, 1, 2, 2, 3, 1, 0, 1, 1, 2, 2, 3, 1, 0];

const labels = Array.from({ length: sleepData.length }, (_, i) => `T${i}`);

const ctx = document.getElementById('actigraphyPlot').getContext('2d');
const actigraphyPlot = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Sleep Stages',
            data: sleepData,
            borderColor: 'rgba(75, 192, 192, 1)',
            // backgroundColor: 'rgba(75, 192, 192, 0.2)',
            backgroundColor: 'rgba(38, 133, 239, 1)',
            // borderColor: 'rgba(0, 178, 169, 1)',
            borderColor: 'rgba(28, 223, 99, 1)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                    callback: function (value) {
                        switch (value) {
                            case 0: return 'Awake';
                            case 1: return 'Light Sleep';
                            case 2: return 'Deep Sleep';
                            case 3: return 'REM Sleep';
                        }
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        switch (context.raw) {
                            case 0: label += 'Awake'; break;
                            case 1: label += 'Light Sleep'; break;
                            case 2: label += 'Deep Sleep'; break;
                            case 3: label += 'REM Sleep'; break;
                        }
                        return label;
                    }
                }
            },
            legend: {
                display: false // This will hide the legend
            }
        }
    }
});
