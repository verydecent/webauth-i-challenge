const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../users/users-model');
// const db = require('../knex');

const router = express.Router();

router.post('/register', (req, res) => {
  const user = req.body;
  
  // Validation
  const bad500 = { error: "You are missing necessary fields or fields are innapropriately typed" };

  if (!user.username || !user.password) {
    res.status(400).json(bad500);
  }
  else {
    const bad500 = { error: "There was an error registering user" };
    
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;

    db.add(user)
      .then(id => {
        res.status(200).json({ success: `User with id ${id} was successfully registered` })
      })
      .catch(err => {
        res.status(500).json(bad500)
      });
  }
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const bad400 = { error: "You are missing necessary fields or fields are innapropriately typed" };
  const bad404 = { error: "Username does not match" };

   !username || !password
    ? res.status(400).json(bad400)
    : db.findBy( username )
        .then(user => {
          res.status(200).json(user)
        })
        .catch(err => {
          res.status(500).json(bad404)
        })
    // : db('users').where({ username }).first()
    //     .then(user => {
    //       res.status(200).json(user)
    //     })
    //     .catch(err => {
    //       res.status(500).json(bad404)
    //     })
});

module.exports = router;