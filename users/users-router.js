const express = require('express');
const router = express.Router();

const Database = require('./users-model');

router.get('/users', (req, res) => {
  Database.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(404).json({ message: "Could not retrieve users from database" });
    });
});

module.exports = router;