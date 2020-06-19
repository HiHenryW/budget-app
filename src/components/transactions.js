// List of last ~5 transactions  (w/ view all link)
import React from 'react';
import axios from 'axios';

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };

    this.retrieveRecentTransactions = this.retrieveRecentTransactions.bind(
      this
    );
  }

  componentDidMount() {
    this.retrieveTransactions();
  }

  retrieveTransactions(params) {
    axios
      .get('http://localhost:3000/banking')
      .then((res) => {
        this.setState({
          transactions: res.data,
        });
        // console.log(res)
      })
      .catch((err) => {
        console.log('err in retrieveRecentTransactions: ', err);
      });
      console.log(this.state.transactions)
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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </table>
        </div>
      </div>
    );
  }
}

export default Transactions;
