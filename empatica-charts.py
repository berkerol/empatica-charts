#!/usr/bin/python3

import os
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

for e in sorted(os.listdir('data')):
  if os.path.isdir(os.path.join('data', e)):
    days += read_heart_rate(os.path.join('data', e, 'HR.csv'))

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
