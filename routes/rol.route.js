// routes/users.route.js

const express = require('express');

const router = express.Router();
const rolController = require('../controller/api_rols.controller');
const { autenticarJWT } = require('../middlewares/JWT');

// Rutas protegidas con JWT

// router.put('/:id', autenticarJWT, usersController.updateUser);
// router.delete('/:id', autenticarJWT, usersController.deleteUser);

// Rutas públicas
// router.post('/', usersController.login);
router.get('/', autenticarJWT, rolController);

// router.post('/list', usersController.login);
// router.post('/register', autenticarJWT,usersController.register);
// router.get('/filter', autenticarJWT, usersController.getUsersDptoLoc);
// ProductsRoute.get('/filter',autenticarJWT, Productos.getProduct);
module.exports = router;
