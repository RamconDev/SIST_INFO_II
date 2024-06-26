const express = require('express');

const ProductsRoute = express.Router();
const Productos = require('../controller/productos.controller');
const { autenticarJWT } = require('../middlewares/JWT');

ProductsRoute.get('/',autenticarJWT,Productos.getProductsByCategory);
ProductsRoute.post('/',autenticarJWT,Productos.createProduct);

// ProductsRoute.get('/',autenticarJWT, Productos.getAllProducts);
// ProductsRoute.get('/:id',autenticarJWT, Productos.getProduct);
// ProductsRoute.put('/',autenticarJWT, Productos.updateQtyProduct);

module.exports = ProductsRoute;
