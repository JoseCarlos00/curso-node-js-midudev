const express = require('express');
const app = express();
// const router = express.Router();

const PORT = process.env.PORT ?? 3000;
const dittoJSON = require('./pokemon/ditto.json');

app.use(express.json());
// app.use(router);


function antes(req, res, next) {
  const usuario = {
    name: "Jose Carlos",
    age: 18,
    token: "fghj2+5shf"
  }

  req.user = usuario;
  next();
}

app.get('/pokemon/ditto', antes, (req, res) => {
  console.log(req.user);
  res.send(JSON.stringify(dittoJSON));
})

app.post('/pokemon', (req, res) => {
  const data = req.body;
  console.log(data);
  data.timestamp = Date.now();

  res.status(201).send(JSON.stringify(data));

})

// Error, La ultima ruta  a la que va a llegar
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});


// Listen on port
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
})
