const express = require('express');
const fs = require('fs');
const app = express();

// Rota para buscar os valores de luzes e velocidade
app.get('/api/:luzes/:velocidade', (req, res) => {
  const luzes = req.params.luzes === 'true'; // converte para booleano
  const velocidade = parseInt(req.params.velocidade); // converte para inteiro

  // Aqui você pode fazer o que quiser com os parâmetros luzes e velocidade,
  // como por exemplo atualizar um arquivo JSON, fazer um cálculo, etc.

  // Retornamos os valores em um objeto JSON
  res.json({
    luzes: luzes,
    velocidade: velocidade
  });
});

// Rota para editar o valor de luzes
app.put('/api/luzes', (req, res) => {
  // Lê o valor atual do arquivo JSON
  const dados = JSON.parse(fs.readFileSync('dados.json'));

  // Altera o valor de luzes para o valor enviado na requisição
  dados.luzes = req.body.luzes === 'true'; // converte para booleano

  // Salva o novo valor no arquivo JSON
  fs.writeFileSync('dados.json', JSON.stringify(dados));

  res.send('O valor de luzes foi atualizado.');
});

app.listen(3000, () => {
  console.log('A API está rodando na porta 3000');
});
