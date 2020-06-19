import React, { useCallback } from "react";
import { hot } from 'react-hot-loader/root';
import userData from './sample/sampleUser.js';
import userBanking from './sample/sampleData.js';
import MaxBudget from './components/maxBudget.js';
import Chart from './components/totalSpendChart.js';
import Income from './components/income.js';
import Transactions from './components/transactions.js';
import UserForm from './components/userForm.js';
import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      currentMonth: '',
      top5Cat: ['test'],
      top5Amount: [5],
      totalSpent: 850,
      user: {id: 0, user_name: '', monthly_budget: 0},
      banking: [],
      view: 'dashboard'
    }
    this.getTopCategories = this.getTopCategories.bind(this);
    this.updateUserBudget = this.updateUserBudget.bind(this);
    this.renderView = this.renderView.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  spendToBudget(spend, budget) {
    return Math.round((spend / budget) * 100);
  }

  getTopCategories(data) {
    let top = data.reduce((accum, curr) => {
      if (curr.i_transaction !== 'credit') {
        if (accum[curr.category]) {
          accum[curr.category] += curr.amount;
        } else {
          accum[curr.category] = curr.amount;
        }
      }
      return accum;
    }, {});

    let list = Object.entries(top)
    list.sort((a,b) => {
      return b[1] - a[1];
    })

    let newList = list.slice(0,5);

    let categories = [];
    let amount = [];

    newList.forEach(item => {
      categories.push(item[0]);
      amount.push(Math.round(item[1]));
    })

    return [categories, amount]

  }

  componentDidMount(){
    // Below needs to be turned into promise so state can change (top5Cat, top5 amount)
    //this.getTopCategories(userBanking)
    this.setState({user: userData[0], banking: userBanking});
  }


  updateUserBudget(data) {
    this.setState({
      user: data,
      currentUser: data.user_name
    })
    console.log('updateUserBudget ran! New state: ', this.state.user)
  }

  changeView(option) {
    this.setState({view: option})
  }

  renderView() {
    if (this.state.view === 'dashboard') {
      return (
      <div className="main">
      <MaxBudget user={this.state.user} calculator={this.spendToBudget} spend={this.state.totalSpent}/>
      <br/><br/>
      <Chart top5Cat={this.state.top5Cat} top5Amount={this.state.top5Amount} width={400}/>
      <br/><br/>
      <Income/>
      <br/><br/>
      <Transactions/>
    </div>
      )
    } else {
      return (
      <div className="form">
      <UserForm updateUserBudget={this.updateUserBudget}/>
      </div>
      )
    }

  }

  render() {
    return (
      <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
        <Navbar.Brand href="#home" onClick={()=> this.changeView('dashboard')}>Budget App</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#budget" onClick={()=> this.changeView('budget')}>Budget</Nav.Link>
            <Nav.Link href="#transactions">Transactions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {this.renderView()}
     
      </div>
    )
  }
}

export default hot(App);

