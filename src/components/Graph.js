import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  datasets: [
    {
      label: 'Number of Clients in a day',
      data: [12, 19, 3, 5, 2, 3, 0],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const MonthlyReportGraph = () => (
  <div className="monthlyReportGraph">
    <div className="current-date">
      <button className="prevButton calenderButton" type="button" onClick={() => { }}>&#10094;</button>
      <h1 className="calendarMonthText">January 2021</h1>
      <button className="nextButton calenderButton" type="button" onClick={() => { }}>&#10095;</button>
    </div>

    <Line data={data} options={options} />
  </div>
);

export default MonthlyReportGraph;
