const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hola');
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Listening server on port:http://localhost:${PORT}`);
});
