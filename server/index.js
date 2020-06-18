const express = require('express');
const bodyParser = require('body-parser');
const connection = require('../database/index.js');
const data = require('./data.js');

const app = express();
const PORT = 3000;
// console.log('connection: ', connection.query);
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../src'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// console.log('data: ', data);

/* ---------------------- SEEDING BANKING AND USERS TABLES ---------------------- */
const seedBankingTable = () => {
  for (let i = 0; i < data.bankingSeed.length; i++) {
    let queryStr = `INSERT INTO banking (i_date, i_description, amount, i_transaction, category, account_name, user_name) VALUES ("${data.bankingSeed[i].i_date}", "${data.bankingSeed[i].i_description}", "${data.bankingSeed[i].amount}", "${data.bankingSeed[i].i_transaction}", "${data.bankingSeed[i].category}", "${data.bankingSeed[i].account_name}", "${data.bankingSeed[i].user_name}")`;
    connection.query(queryStr, function (err, results) {
      if (err) {
        console.log('err in seedBankingTable: ', err);
      }
    });
  }
};

// UNCOMMENT BELOW TO POPULATE BANKING TABLE
// seedBankingTable();

const seedUserTable = () => {
  for (let i = 0; i < data.userSeed.length; i++) {
    let queryStr = `INSERT INTO users (user_name, monthly_budget) VALUES ("${data.userSeed[i].user_name}", "${data.userSeed[i].monthly_budget}")`;
    connection.query(queryStr, function (err, results) {
      if (err) {
        console.log('err in seedUserTable: ', err);
      }
    });
  }
};

// UNCOMMENT BELOW TO POPULATE USER TABLE
// seedUserTable();

/* ---------------------- EXPRESS ROUTING ---------------------- */

// GET route
app.get('/banking', function (req, res) {
  const queryStr = 'SELECT * FROM banking ORDER BY id ASC';
  connection.query(queryStr, (err, data) => {
    if (err) {
      console.log('err in app.get: ', err);
      res.sendStatus(404);
    } else {
      res.status(200).json(data);
    }
  });
});