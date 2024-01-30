// Importar el modelo de libro definido en '../models/book.model'
const Calzado = require('../models/calzado.model');
const e = require("express");

// Controlador para manejar las operaciones relacionadas con libros
const CalzadoCtrl = {};

// Función para obtener todos los libros en la base de datos
CalzadoCtrl.getCalzados = async (req, res) => {
    const calzado = await Calzado.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
};

// Función para obtener un libro específico por su ID
CalzadoCtrl.getCalzado = async (req, res) => {
    const calzado = await Calzado.findById(req.params.id)
        .then((data) => {
            if (data != null) res.json(data);
            else res.json({ status: 'Calzado doesn\'t exist' });
        })
        .catch(err => console.error(err));
};

// Añadir un nuevo libro a la base de datos
CalzadoCtrl.addCalzado = async (req, res) => {
    const newCalzado = new Calzado(req.body);
    await newCalzado.save()
        .then(() => res.json({ status: 'Calzado successfully inserted' }))
        .catch(err => res.send(err.message));
};

// Función para actualizar un libro con el ID y los nuevos datos del libro
CalzadoCtrl.updateCalzado = async (req, res) => {
    const calzado = req.body;
    await Calzado.findByIdAndUpdate(
        req.params.id,
        { $set: calzado },
        { new: true }
    )
        .then((data) => {
            if (data != null) res.json({ status: 'Calzado successfully updated', data });
            else res.json({ status: 'Calzado doesn\'t exist' });
        })
        .catch(err => res.send(err.message));
};

// Función para borrar un libro dado su ID
CalzadoCtrl.deleteCalzado = async (req, res) => {
    await Calzado.findByIdAndDelete(req.params.id)
        .then((data) => {
            if (data != null) res.json({ status: 'Calzado successfully deleted' });
            else res.json({ status: 'Calzado doesn\'t exist' });
        })
        .catch(err => res.send(err.message));
};

// Función para obtener los diferentes géneros de la base de datos
CalzadoCtrl.getNombreCalzado = async (req, res) => {
    await Calzado.find().distinct('nombre')
        .then((data) => res.json(data))
        .catch((err) => console.error(err));
}

// Exportar el controlador para su uso en otras partes de la aplicación
module.exports = CalzadoCtrl;
