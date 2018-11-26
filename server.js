const express = require('express');
const app = express();
const name = require('./data.json');


const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
// app.use(express.static('public'));
app.use('/sunsets', express.static('public/sunsets.html'));

app.get('/', (request, response) => {
  // response.send('hello world');
});

app.get('/sunsets', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/sunsets.html'));
});


app.get('/json', (request, response) => {
  // response.status(200).json({"name": "MEGAN"});
  response.status(200).json(name)
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

app.use(function (req, res, next) {
  res.status(404).send("Can't find that page.")
});
