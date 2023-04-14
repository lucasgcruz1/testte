const express = require('express');
const app = express();

// Configuração do middleware para lidar com dados em formato JSON
app.use(express.json());

// Rota para atualizar as luzes
let lightsOn = false;
app.post('/lights', (req, res) => {
  lightsOn = req.body.value;
  res.json({ success: true });
});

// Rota para obter o status das luzes
app.get('/lights', (req, res) => {
  res.json({ lightsOn });
});

// Inicialização do servidor
app.listen(3000, () => console.log('API rodando na porta 3000.'));
