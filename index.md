# Empatica Charts

Charts for physiological data gathered from [Empatica E4](https://www.empatica.com/research/e4/) wristband. Press arrow keys to change days, press _R_ to reset zoom, press _L_ to toggle visibility of lines and points. Scroll to zoom and drag to pan. You can view it [here](empatica-charts.html) (a bit slow due to huge data size). Made with [Chart.js](https://www.chartjs.org).

There is a Python script to prepare the data for charts: collect data from folders (extracted zips), map them with their dates and convert to JavaScript arrays separated by days.

## Sensors

- [ ] ACC -> Acceleration
- [ ] BVP -> Blood Volume Pulse
- [ ] EDA -> Electrodermal Activity
- [x] HR -> Heart Rate
- [ ] IBI -> Time Between Heart Beats
- [ ] TEMP -> Temperature
