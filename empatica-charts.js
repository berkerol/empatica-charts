/* global day1, day2, day3, day4, day5, day6, day7, day8, Chart */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let day = 0;

const days = [day1, day2, day3, day4, day5, day6, day7, day8];

const color = 'rgba(54, 162, 235)';

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      data: days[day],
      fill: false,
      showLine: false,
      lineTension: 0,
      pointRadius: 1,
      borderWidth: 2,
      borderColor: color,
      backgroundColor: color,
      pointBorderColor: color,
      pointBackgroundColor: color
    }]
  },
  options: {
    animation: {
      duration: 0
    },
    hover: {
      animationDuration: 0
    },
    legend: {
      display: false
    },
    title: {
      display: true,
      text: `Day: ${day + 1} Total: ${days[day].length}`
    },
    scales: {
      xAxes: [{
        type: 'time',
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date & Time'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Heart Rate'
        }
      }]
    },
    plugins: {
      zoom: {
        zoom: {
          enabled: true
        },
        pan: {
          enabled: true
        }
      }
    }
  }
});

window.addEventListener('keyup', e => {
  if (e.keyCode === 82) {
    chart.resetZoom();
  }
  if (e.keyCode === 76) {
    if (chart.data.datasets[0].showLine) {
      chart.data.datasets[0].showLine = false;
      chart.data.datasets[0].pointRadius = 1;
    } else {
      chart.data.datasets[0].showLine = true;
      chart.data.datasets[0].pointRadius = 0;
    }
    chart.update();
  }
  if (e.keyCode === 37 || e.keyCode === 39) {
    if (e.keyCode === 37) {
      if (day === 0) {
        day = 7;
      } else {
        day--;
      }
    } else {
      if (day === 7) {
        day = 0;
      } else {
        day++;
      }
    }
    chart.data.datasets[0].data = days[day];
    chart.options.title.text = `Day: ${day + 1} Total: ${days[day].length}`;
    chart.update();
  }
});
