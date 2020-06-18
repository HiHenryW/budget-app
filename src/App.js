import React from "react";
import { hot } from 'react-hot-loader/root';
import userData from './sample/sampleUser.js';
import userBanking from './sample/sampleData.js';
import MaxBudget from './components/maxBudget.js';
import TotalSpend from './components/totalSpend.js';
import Income from './components/income.js';
import Transactions from './components/transactions.js';
import UserForm from './components/userForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [{user_name: ''}],
      banking: []
    }
  }

  componentDidMount(){
    this.setState({user: userData, banking: userBanking});
  }
  render() {
    return (
    <div className="main">
      <h1>Where My Money At</h1>
      <MaxBudget user={this.state.user}/>
      <TotalSpend/>
      <Income/>
      <Transactions/>
      <UserForm/>
    </div>
    )
  }
}

export default hot(App);