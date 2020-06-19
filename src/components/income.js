// Bar graph of income/spend over time
import React from 'react';
import {Bar, Line} from 'react-chartjs-2';

class Income extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["August", "September", "October", "November", "December"],
        datasets: [
          {
            label: 'Spending',
            fill: true,
            lineTension: 0,
            backgroundColor: 'rgba(242, 217, 132, 1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [500, 436, 350, 534, 400]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
      }
      
    }
  }


render() {
  return (
    <div className="line">
      <h2>Overall Spending</h2>
      <br/> <br/>
      <Line
        data={this.state.chartData}
        options={this.state.options}
        height={400}
      />
    </div>
  )
}

}

export default Income;