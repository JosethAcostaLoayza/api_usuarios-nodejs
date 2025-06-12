const { sql, config } = require('./db');

async function testConnection() {
  try {
    const pool = await sql.connect(config);
    console.log('✅ Conexión exitosa a SQL Server');
    const result = await pool.request().query('SELECT 1 AS prueba');
    console.log(result.recordset);
  } catch (err) {
    console.error('❌ Error al conectar:', err.message);
  }
}

testConnection();
