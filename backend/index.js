const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const {mongoose} = require('./database');
const {json} = require("express");

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Rutas zapatillas
app.use('/api/v1/calzados', require('./routes/calzado.route'));
app.use('/',(req, res) => res.send('API in /api/v1/calzados'));

//Arranque servidor
app.listen(app.get('port'), ()=>{
    console.log('Server on port: ', app.get('port'));
})