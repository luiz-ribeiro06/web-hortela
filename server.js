const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

connectDB();

// teste
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API funcionando.' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});