const db = require('../knex');

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db('users');
}

function add(user) {
  return db('users').insert(user).then(ids => ids[0]);
}

function findById(id) {
  return db('users').where({ id }).first();
}

function findBy(username) {
  return db('users').where("username", username).first();
}