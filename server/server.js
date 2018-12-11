require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.use(require('./routes/usuario'));



mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('base de datos online');
});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto 3000');
});