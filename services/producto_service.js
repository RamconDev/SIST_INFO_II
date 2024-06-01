const productoModel = require('../models/producto');

const { createProduct } = require("../middlewares/validations/prodValidation");
const Products = require('../models/producto');

async function getallProductos(params) {
	const response = {
		message: 'No data found',
		data: null,
		status: 400,
	};
	try {
		const resp = await productoModel.findAll();
		if (resp) {
			response.data = resp;
			response.message = 'data found';
			response.status = 200;
		}
	} catch (error) {
		// console.log("===>",error);
		response.message = error.details[0].message;
	}
	return response;
}
async function getProductoByID(params) {
	const response = {
		message: 'No data found',
		data: null,
		status: 400,
	};
	try {
		// console.log("---->",params);
		const { productoId } = params;
		const resp = await productoModel.findOne({ where: { id: productoId } });
		if (resp) {
			response.data = resp;
			response.message = 'data found';
			response.status = 200;
		}
	} catch (error) {
		// console.log("===>",error);
		response.message = error.details[0].message;
	}
	return response;
}
async function getProductoByName(params) {}

async function setProductoById(params) {}

async function createProducts(params) {
	const response = {
		message: 'No data found',
		data: null,
		status: 400,
	};
	try {
		const { category_id, ancestor_id, name, description, margin } = params;
		const res = await Products.create({
			ancestor_id: ancestor_id !== 'null' ? ancestor_id : null,
			category_id,
			name,
			description,
			margin,
		});
		if (res) {
			response.message = "was created product";
			response.status = 201;
			response.data = res;
		}
	} catch (error) {
		// console.log('==>', error);
		response.message = error.details[0].message;
	}
	return response;
}

async function setProducts(params){
	const response = {
		message: 'No data found by set',
		data: null,
		status: 400,
	};
	try {
		console.log(params);
	} catch (error) {
		response.message = error.details[0].message;
	}
	return response;
}
module.exports = {
	getallProductos,
	getProductoByID,
	getProductoByName,
	setProductoById,
	createProducts,
	setProducts,

};
