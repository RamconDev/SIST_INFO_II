// const { Sequelize } = require('sequelize');

// const Literal = Sequelize.literal;
const viewProductos = require('../models/viewproduct');

async function getAllProductView(params) {
	const response = {
		message: 'not data found',
		status: 400,
		data: null,
	};
	try {
		// console.log("llllllego",params);
		const { sucursalId } = params;
		const res = await viewProductos.findAll({
			where: { idsucursal: sucursalId },
		});
		if (res) {
			response.data = res;
			response.message = 'products found by this sucursal';
			response.status = 200;
		}
	} catch (error) {
		// console.log("//------->",error);
		response.message = error.details[0].message;
	}
	return response;
}
async function getProductsByCategory(params) {
	const response = {
		message: 'not data found',
		status: 400,
		data: null,
	};
	try {
		// console.log("llllllego",Literal);
		const { catid, dpto } = params;
		// console.log('->',params);
		let cols = null;
		switch (dpto) {
			case '2':
				cols = [
					"id",
					"name",
					"description",
					"value",
					"qty",
					"price_cost",
					"margin",
				];
				break;
			case '4':
				cols = ["id", "name", "description", "value", "qty", "pricesell"];
				break;
			case '3':
				cols = ["id", "name", "description", "value", "qty"	];
				break;
			default:
				response.message = "this category dosnt exist";
				break;
		}
		// console.log(cols);
		if (cols) {
			const res = await viewProductos.findAll({
				where: { categoryid: catid },
				attributes: cols,
			});
			if (res) {
				response.data = res;
				response.message = 'products found by this sucursal';
				response.status = 200;
			}
		}
		// console.log('->',res);
	} catch (error) {
		// console.log("//------->", error);
		response.message = error.details[0].message;
	}
	return response;
}

async function updateQTYProducto(params) {
	/**
	 * aqui buscar  el usuario en la tabla PARA LA SUCURSAL
	 */
}
module.exports = {
	updateQTYProducto,
	getAllProductView,
	getProductsByCategory,
};
