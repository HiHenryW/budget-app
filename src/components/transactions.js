// List of last ~5 transactions  (w/ view all link)
import React from 'react';
import axios from 'axios';
const moment = require('moment');

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      recentTransactions: [],
      dataRows: 5,
    };

    this.updateRecentTransactions = this.updateRecentTransactions.bind(this);
    this.retrieveTransactions = this.retrieveTransactions.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleMinimizeClick = this.handleMinimizeClick.bind(this);
  }

  componentDidMount() {
    this.retrieveTransactions();
  }

  updateRecentTransactions() {
    let subList = [];
    for (let i = 0; i < this.state.dataRows; i++) {
      let transaction = {};
      transaction.index = i + 1;
      transaction.date = this.state.transactions[i].i_date;
      transaction.description = this.state.transactions[i].i_description;
      transaction.amount = this.state.transactions[i].amount;
      transaction.category = this.state.transactions[i].category;
      subList.push(transaction);
    }
    this.setState({ recentTransactions: subList });
  }

  retrieveTransactions() {
    axios
      .get('http://localhost:3000/banking')
      .then((res) => {
        this.setState({
          transactions: res.data,
        });
        // console.log('state: ', this.state.transactions[0])
      })
      .then(() => {
        this.updateRecentTransactions();
      })
      // .then(() => {
      //   console.log(this.state.recentTransactions);
      // })
      .catch((err) => {
        console.log('err in retrieveTransactions: ', err);
      });
  }

  handleExpandClick(event, callback) {
    event.preventDefault();
    let increment = this.state.dataRows + 25;
    this.setState({ dataRows: increment }, this.updateRecentTransactions);
  }

  handleMinimizeClick(event) {
    event.preventDefault();
    this.setState({ dataRows: 5 }, this.updateRecentTransactions);
  }

  render() {
    return (
      <div class="row justify-content-center">
        <div class="col-auto">
          <h2>Recent Transactions</h2>
          <table class="table table-responsive">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount ($)</th>
                  <th scope="col">Category</th>
                </tr>
              </thead>
              <tbody>
                {this.state.recentTransactions.map((transaction) => {
                  return (
                    <tr>
                      <th scope="row">{transaction.index}</th>
                      <td>{moment(transaction.date).format("MMM D 'YY")}</td>
                      <td>{transaction.description}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.category}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </table>
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={this.handleExpandClick}
          >
            Show more
          </button>
          <span> </span>
          <button
            type="button"
            class="btn btn-outline-secondary"
            onClick={this.handleMinimizeClick}
          >
            Show less
          </button>
        </div>
      </div>
    );
  }
}

export default Transactions;
