const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../src'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// POST route
app.post('/users', function (req, res) {
  let newUser = new db.models.User({
    name: req.body.name,
    budget: req.body.budget,
  });
  newUser
    .save()
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('err in app.post: ', err);
      res.sendStatus(404);
    });
});

// GET route
app.get('/banking', function (req, res) {
  db.models.Transactions.find({})
    .exec()
    .then((data) => {
      res.send(200).json(data);
    })
    .catch((err) => {
      console.log('err in app.get: ', err);
      res.sendStatus(404);
    });
});
