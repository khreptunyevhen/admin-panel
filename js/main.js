// Transaction Chart

let transactionChartOptions = {
  series: [55, 25, 20],
  chart: {
    type: 'donut',
  },
  colors:['#000', '#00d25b', '#ffab00'],
  labels: ['Paypal', 'Cash', 'Stripe'],
  legend: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 1087.98,
    options: {
      chart: {
        width: 300,
      }
    }
  },
  {
    breakpoint: 479.98,
    options: {
      chart: {
        width: `${100}%`,
      }
    }
  }]
};

let transactionChart = new ApexCharts(document.querySelector("#diagram"), transactionChartOptions);
transactionChart.render();