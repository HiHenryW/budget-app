// Singel bar graph with total budget used for month 
import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

let MaxBudget = ({user, calculator, spend}) => {
  return (
    <div className="maxBudget">
      <h2>Budget</h2>
      <ProgressBar>
        <ProgressBar animated striped variant="danger" now={calculator(spend, user.monthly_budget)} label={`$${spend}`}/>
        <ProgressBar animated striped variant="success" now={100 - calculator(spend, user.monthly_budget)} label={`$${user.monthly_budget - spend}`}/>
      </ProgressBar>
      <p>spend to budget</p>
    </div>
  )
}


export default MaxBudget;