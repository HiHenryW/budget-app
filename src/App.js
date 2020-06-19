import React from "react";
import { hot } from 'react-hot-loader/root';
import userData from './sample/sampleUser.js';
import userBanking from './sample/sampleData.js';
import MaxBudget from './components/maxBudget.js';
import TotalSpend from './components/totalSpend.js';
import Income from './components/income.js';
import Transactions from './components/transactions.js';
import UserForm from './components/userForm.js';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Budget App</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#budget">Budget</Nav.Link>
            <Nav.Link href="#transactions">Transactions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="main">
      <MaxBudget user={this.state.user}/>
      <TotalSpend/>
      <Income/>
      <Transactions/>
      <UserForm/>
    </div>
    </div>
    )
  }
}

export default hot(App);