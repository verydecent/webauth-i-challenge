const Database = require('../knex');

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return Database('users');
}

function add(user) {
  return Database('users').insert(user);
}

function findById(id) {
  return Database('users').where({ id }).first();
}

function findBy(fill) {
  return Database('users').where(fill);
}