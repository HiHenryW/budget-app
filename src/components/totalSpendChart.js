// Pie chart with total categorical spending for month 
import React from "react";
import {Pie, Doughnut} from 'react-chartjs-2';
import { render } from "react-dom";
import userBanking from '../sample/sampleData.js';


class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Mortgage & Rent", "Public Transportation", "Restaurants", "Air Travel", "Vacation"],
        datasets: [
          {
            label: 'Spending',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [1150, 336, 308, 248, 200]
          }
        ]
      }
    }
  }


render() {
  return (
    <div>
      <h2>Spending By Category</h2>
      <Doughnut
        data={this.state.chartData}
      />
    </div>
  )
}

}

export default Chart;