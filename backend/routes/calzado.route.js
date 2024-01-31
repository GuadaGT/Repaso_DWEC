// Importar el módulo Express
const express = require('express');

// Importar el controlador de libros
const calzadoCtrl = require('../controllers/calzado.controller');
// Crear un enrutador de Express
const router = express.Router();

// Definir rutas para diferentes operaciones CRUD
// Obtener todos los libros
router.get('/todos', calzadoCtrl.getCalzados);
// Obtener un libro por su ID
router.get('/calzado/:id', calzadoCtrl.getCalzado);
// Añadir un nuevo libro
router.post('/insertar/', calzadoCtrl.addCalzado);
// Actualizar un libro por su ID
router.put('/actualizar/:id', calzadoCtrl.updateCalzado);
// Borrar un libro por su ID
router.delete('/borrar/:id', calzadoCtrl.deleteCalzado);
// Obtener los géneros de libros disponibles
router.get('/nombre/:nombre', calzadoCtrl.getNombreCalzado);

// Exportar el enrutador para su uso en otras partes de la aplicación
module.exports = router;
