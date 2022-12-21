const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
  const a = 5
  const b = 6
  const resultado = a+b 

  res.send(`El resultado es: ${resultado}`);
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});

