const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let lightsOn = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/lights', (req, res) => {
  res.json({ value: lightsOn });
});

app.post('/lights', (req, res) => {
  lightsOn = req.body.value;
  res.json({ success: true, value: lightsOn });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
