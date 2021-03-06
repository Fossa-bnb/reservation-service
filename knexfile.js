const path = require('path');

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost:5432/reservations_test',
    seeds: {
      directory: path.join(__dirname, '/db/seeds/test'),
    },
  },
  development: {
    client: 'pg',
    connection: 'postgres://postgres@database:5432/reservations',
    seeds: {
      directory: path.join(__dirname, '/db/seeds'),
    },
  },
};
