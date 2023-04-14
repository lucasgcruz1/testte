const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let lightsOn = "";

app.post('/lights', (req, res) => {
  lightsOn = req.body.value;
  res.json({ success: true });
});

app.get('/lights', (req, res) => {
  const lights = JSON.parse(lightsOn);
  res.json(lights);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
