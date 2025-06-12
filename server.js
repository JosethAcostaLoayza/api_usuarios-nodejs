// server.js
const express = require('express');
const app = express();
const { sql, config } = require('./db');

// Middleware para JSON
app.use(express.json());

// GET: listar usuarios
app.get('/api/usuarios', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM usuarios');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

// POST: crear nuevo usuario
app.post('/api/usuarios', async (req, res) => {
  const { nombre, correo } = req.body;
  if (!nombre || !correo) {
    return res.status(400).json({ error: 'Nombre y correo son obligatorios' });
  }

  try {
    const pool = await sql.connect(config);
    await pool.request()
      .input('nombre', sql.VarChar, nombre)
      .input('correo', sql.VarChar, correo)
      .query('INSERT INTO usuarios (nombre, correo) VALUES (@nombre, @correo)');
    res.status(201).json({ mensaje: 'Usuario creado' });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error al crear usuario' });
  }
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
