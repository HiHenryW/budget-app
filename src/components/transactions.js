// List of last ~5 transactions  (w/ view all link)
import React from 'react';
import axios from 'axios';

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
      recentTransactions: [],
    };

    this.retrieveTransactions = this.retrieveTransactions.bind(this);
  }

  componentDidMount() {
    this.retrieveTransactions();
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
        let smallerList = [];
        for (let i = 0; i < 5; i++) {
          let transaction = {};
          transaction.index = i + 1;
          transaction.date = this.state.transactions[i].i_date;
          transaction.description = this.state.transactions[i].i_description;
          transaction.amount = this.state.transactions[i].amount;
          transaction.category = this.state.transactions[i].category;
          smallerList.push(transaction);
        }
        this.setState({ recentTransactions: smallerList });
      })
      .then(() => {
        console.log(this.state.recentTransactions);
      })
      .catch((err) => {
        console.log('err in retrieveTransactions: ', err);
      });
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
                      <td>{transaction.date}</td>
                      <td>{transaction.description}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.category}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </table>
        </div>
      </div>
    );
  }
}

export default Transactions;
