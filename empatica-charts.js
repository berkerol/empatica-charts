/* global day1, day2, day3, day4, day5, day6, day7, day8, Chart, createButton createDropdownRow */
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
    layout: {
      padding: {
        top: 50,
        right: 20
      }
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

const dropdownItems = [];
for (const d in days) {
  dropdownItems.push([d, `Day ${+d + 1} (${days[d].length} items)`]);
}
const firstButtonElements = ['info', 'changeView()', 'v', 'chart-line', '<u>V</u>iew: <span id="change-view">Point</span>'];
const dropdownElements = [[['info dropdown-toggle', '', 'd', 'calendar-alt', `<u>D</u><span id="change-day-text">ay ${day + 1} (${days[day].length} items)</span>`], 'change-day', dropdownItems]];
const secondButtonElements = ['info', 'chart.resetZoom()', 'r', 'undo-alt', '<u>R</u>eset zoom'];
const dropdownRow = createDropdownRow(dropdownElements);
dropdownRow.insertBefore(createButton(...firstButtonElements), dropdownRow.children[0]);
dropdownRow.appendChild(createButton(...secondButtonElements));
document.body.insertBefore(dropdownRow, canvas);
document.querySelectorAll('.dropdown-item').forEach(e => {
  e.addEventListener('click', function () {
    document.getElementById('change-day-text').innerText = this.innerText.substring(1);
    day = +this.dataset.bsValue;
    chart.data.datasets[0].data = days[day];
    chart.update();
  });
});

window.changeView = function () {
  if (chart.data.datasets[0].showLine) {
    chart.data.datasets[0].showLine = false;
    chart.data.datasets[0].pointRadius = 1;
    document.getElementById('change-view').innerHTML = 'Point';
  } else {
    chart.data.datasets[0].showLine = true;
    chart.data.datasets[0].pointRadius = 0;
    document.getElementById('change-view').innerHTML = 'Line';
  }
  chart.update();
};
