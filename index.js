const express = require('express');
const app = express();

app.use(express.json());

let dados = {}; 

app.get('/toma', (req,res) => {
 res.json({teste1: 'teste'})
})

app.post('/venha', (req,res) => {
   const teste = req.body.teste
dados = { ...dados, teste}
   console.log(dados)
    res.send(dados)
})


app.get('/venha', (req,res) => {
     res.send(dados)

})

app.listen(3000, () => {
console.log('servidor está on')
});
