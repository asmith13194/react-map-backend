module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'react-map',
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'react-map-test',
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }

};
