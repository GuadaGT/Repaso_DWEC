// Importar el módulo Express
const express = require('express');

// Importar el controlador de libros
const calzadoCtrl = require('../controllers/calzado.controller');
// Crear un enrutador de Express
const router = express.Router();

// Definir rutas para diferentes operaciones CRUD
// Obtener todos los libros
router.get('/api/v1/calzados/todos/', calzadoCtrl.getCalzados);
// Obtener un libro por su ID
router.get(' /api/v1/calzados/calzado/:id', calzadoCtrl.getCalzado);
// Añadir un nuevo libro
router.post('/api/v1/calzados/insertar/', calzadoCtrl.addCalzado);
// Actualizar un libro por su ID
router.put('/api/v1/calzados/actualizar/:id', calzadoCtrl.updateCalzado);
// Borrar un libro por su ID
router.delete(' /api/v1/calzados/borrar/:id', calzadoCtrl.deleteCalzado);
// Obtener los géneros de libros disponibles
router.get(' /api/v1/calzados/nombre/:nombre', calzadoCtrl.getNombreCalzado);

// Exportar el enrutador para su uso en otras partes de la aplicación
module.exports = router;
