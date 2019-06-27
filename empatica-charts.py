#!/usr/bin/python3

from datetime import datetime, timedelta

def read_heart_rate(file_name):
  data = []
  f = open(file_name, 'r')
  dt = datetime.fromtimestamp(int(float(f.readline().rstrip())))
  f.readline()
  for x in f:
    data.append([dt.strftime('%Y-%m-%d %H:%M:%S'), x.rstrip()])
    dt += timedelta(seconds=1)
  f.close()
  return data

days = []

files = ['./1556618502_A010C3/HR.csv', './1556692893_A01B22/HR.csv', './1556777808_A01B22/HR.csv', './1556865657_A01B22/HR.csv',
'./1556891066_A01B22/HR.csv', './1556891443_A01B22/HR.csv', './1556895144_A01B22/HR.csv', './1556951136_A01B22/HR.csv',
'./1557036348_A01B22/HR.csv', './1557121222_A01B22/HR.csv', './1557226001_A01B22/HR.csv']

for x in files:
  days += read_heart_rate(x)

date = days[0][0][0:10]
day = 1
f = open('./days.js', 'w+')
f.write('const day' + str(day) + ' = [')

for x in days:
  if not x[0][0:10] == date:
    date = x[0][0:10]
    day += 1
    f.write('];\n')
    f.write('const day' + str(day) + ' = [')
  f.write('{ x: new Date("%s"), y: %s },' % (x[0], x[1]))

f.write('];\n')
f.close()
