const express = require('express');
const app = express();

app.get('/dados', (req, res) => {
  res.sendFile(__dirname + '/dados.json');
});

app.listen(3000, () => {
  console.log('A API está rodando na porta 3000');
});
