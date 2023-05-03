
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "domains18",
    password: "alphauser",
    port: 5432,
    database: 'perntodo'
})



module.exports = pool;
