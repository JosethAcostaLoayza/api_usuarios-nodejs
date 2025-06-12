// db.js
const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'sql',
  server: 'DESKTOP-H03JJUG\\SQLEXPRESS', // o la IP/nombre del servidor
  database: 'testdb_api_nodejs',
  options: {
    trustServerCertificate: true, // necesario en local
  },
};

module.exports = { sql, config };