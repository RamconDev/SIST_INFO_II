// routes/users.route.js

const express = require('express');
const router = express.Router();
const usersController = require('../controller/api_user.controller');
const { autenticarJWT } = require('../middlewares/JWT');


// Rutas protegidas con JWT

// router.put('/:id', autenticarJWT, usersController.updateUser);
// router.delete('/:id', autenticarJWT, usersController.deleteUser);

// Rutas públicas
// router.post('/', usersController.login);

router.post('/login', usersController.login);
router.post('/register', autenticarJWT,usersController.register);
router.get('/filter', autenticarJWT, usersController.getUsersDptoLoc);
// ProductsRoute.get('/:id',autenticarJWT, Productos.getProduct);
module.exports = router;