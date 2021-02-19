const express = require('express');
const app = express();
const path = require('path');
const faker = require('faker');

console.log(faker.name.firstName());
console.log(faker.name.firstName());

app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;

app.listen(PORT, console.log(`app listening on port ${PORT}`));
