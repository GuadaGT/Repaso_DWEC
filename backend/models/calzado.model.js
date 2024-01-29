const mongoose = require('mongoose');
const {Schema} = mongoose;

const calzadoSchema = new Schema({
    nombre: {type: String, required: true},
    imagen: {type: String, required: true},
    precio: {type: Number, required: true},
    tipo: {type: String, required: true},
    talla: {type: Number, required: true},
    color: {type: String, required: true},
})
module.exports = mongoose.model('Calzado', calzadoSchema);