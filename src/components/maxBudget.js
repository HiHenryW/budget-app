// Singel bar graph with total budget used for month 
import React from "react";

let MaxBudget = ({user}) => {
  return (
    <div>
      <h2> {user[0].user_name}'s Budget Bar</h2>
      {console.log('this is user data', user)}
      <p>total: {}</p>
    </div>
  )
}

export default MaxBudget;