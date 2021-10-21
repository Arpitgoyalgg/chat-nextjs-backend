const { Pool } = require('pg');

//configure environment variables
const dotenv = require('dotenv');
dotenv.config();

const client = new Pool({
    connectionString: process.env.DATABASE_URI,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = client
