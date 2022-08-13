$('.counter-up').counterUp({
    delay: 20,
    time: 1000,
});
let dateArr = ['jun 1', 'feb 22', 'march 30', 'april 2', 'may 16', 'june 3', 'july 31','dec 12','nov 13','feb 14','oct 5'];
let orderCountArr = [4,6,7,2,9,3,8,10,3,7,14];
let viewerCountArr = [22,33,54,78,60,10,56,60,17,24,50];

const ctx = document.getElementById('ovChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [{
            label: 'Orders',
            data: orderCountArr,
            backgroundColor: [
                '#007bff30'
            ],
            borderColor: [
                '#007bff'
            ],
            borderWidth: 1,
            tension: 0,
            pointStyle: 'star',
        },{
            label: 'Viewers',
            data: viewerCountArr,
            backgroundColor: [
                '#6f42c130'
            ],
            borderColor: [
                '#6f42c1'
            ],
            borderWidth: 1,
            tension: 0,
            pointStyle: 'star',
            
        }]
    },
    options: {
        scales: {
            y: {
                display: false,
                ticks: {
                        beginAtZero: true,
                    }   
            },
            x: {
                display: false,
                gridLines: [
                   { display: false,}
                ]
            }
           },
           plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    usePointStyle: true,
                    fontColor: '#333',
                }
            }
        },
           
           fill: true
    }
});

let places= ['yangon','mandalay','taunggyi','kachin','chin','mon'];
let placeOrder= [12,30,45,20,15,40];
const aa = document.getElementById('opChart').getContext('2d');
const opChart = new Chart(aa, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '# of Votes',
            data: placeOrder,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                display: false,
                beginAtZero: true
            },
            x: { 
                display: false,
            }
        },
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    fontColor: '#333',
                }
            }
        },
    }
});