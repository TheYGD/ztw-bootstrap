
     // Doughnut chart
    const ctx = document.getElementById('doughnut-chart').getContext('2d');
    const doughnutChart = new Chart(ctx, {
        type: 'doughnut',
    data: {
        labels: ['Kenia', 'Brazylia', 'Sri Lanka', 'Peru', 'Zimbabwe'],
    datasets: [{
        label: 'Liczba kupionych wycieczek',
    data: [130, 245, 162, 65, 102],
    backgroundColor: [
    'rgba(63, 81, 181, 0.5)',
    'rgba(77, 182, 172, 0.5)',
    'rgba(66, 133, 244, 0.5)',
    'rgba(156, 39, 176, 0.5)',
    'rgba(233, 30, 99, 0.5)',
    ],
                }],
            },
        });
