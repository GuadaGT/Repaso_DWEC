const mongoose = require('mongoose');
const {Schema} = mongoose;

const calzadoSchema = new Schema({
    nombre: { type: String, required: true, minlength: 5, trim: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true, min: 0 },
    tipo: { type: String, required: true, minlength: 3, trim: true },
    talla: { type: Number, required: true, min: 36, max: 50 },
    color: { type: String, required: true, minlength: 2, trim: true },
})
module.exports = mongoose.model('Calzado', calzadoSchema);
