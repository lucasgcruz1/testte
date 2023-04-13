const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let lightsOn = false;
let variable1 = 0;
let variable2 = 0;

app.get('/lights', (req, res) => {
  res.json({ lightsOn });
});

app.post('/lights', (req, res) => {
  lightsOn = req.body.value;
  res.json({ success: true });
});

app.get('/variable1', (req, res) => {
  res.json({ variable1 });
});

app.post('/variable1', (req, res) => {
  variable1 = req.body.value;
  res.json({ success: true });
});

app.get('/variable2', (req, res) => {
  res.json({ variable2 });
});

app.post('/variable2', (req, res) => {
  variable2 = req.body.value;
  res.json({ success: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
