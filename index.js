const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de controle de luzes e velocidade!');
});

app.get('/api/controle', (req, res) => {
  const luzes = Math.random() < 0.5 ? true : false;
  const velocidade = Math.floor(Math.random() * 11);

  res.send({ luzes, velocidade });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
