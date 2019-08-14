const db = require('../data/db-config.js')

module.exports = {
  find,
  findById,
  findPost,
  add,
  // update,
  // remove
}

function find() {
  return db('users')
}

function findById(id) {
  return db('users').where({ id }).first()
}

function findPost(user_id) {
  return db('posts as p')
    .join('users as u')
    .select('p.id', 'u.username', 'p.contents')
    .where({ user_id })
}

async function add(user) {
  const [ id ] = await db('users').insert(user)
  return findById(id)
}

async function update() {
  const [ id ] = req.params
  const changes = req.body
}