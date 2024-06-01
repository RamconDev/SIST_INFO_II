// const {
// 	setQTYProductById,
// 	setQTYProductsById,
// } = require('../services/prodDetalle_service');
const { getProductsByCategory } = require('../services/productView_service');
const {
	// getProductoByID,
	createProducts,
	setProducts,
} = require('../services/producto_service');

// const  { registrarIngreso }= require("../services/opcaban_service");
class Productos {
	// obtener todos los productos
	static async getProductsByCategory(req, res) {
		try {
			// console.log(req);
			const response = await getProductsByCategory(req.query);
			return res.status(response.status).send(response);
		} catch (error) {
			return res
				.status(500)
				.send({ message: 'error in  getProductsCategory -> ', error });
		}
	}

	static async createProduct(req, res) {
		try {
			// console.log(req);
			const response = await createProducts(req.body);
			return res.status(response.status).send(response);
		} catch (error) {
			return res
				.status(500)
				.send({ message: 'error created product -> ', error });
		}
	}

	static async setProduct(req, res) {
		try {
			const response = await setProducts(req.query);
			return res.status(response.status).send(response);
		} catch (error) {
			return res
				.status(500)
				.send({ message: 'error setted product -> ', error });
		}
	}
	// static async getAllProducts(req, res) {
	// 	try {
	// 		// console.log("--->>>",req);
	// 		// const response= await getallProductos(null);
	// 		const response = await getAllProductViewResume({
	// 			sucursalId: req.sucursal,
	// 		});
	// 		return res.status(response.status).send(response);
	// 	} catch (error) {
	// 		// console.log("errorrrr ",error);
	// 		return res
	// 			.status(500)
	// 			.send({ message: 'error in  getAllProducts -> ', error });
	// 	}
	// }

	// static async getProduct(req, res) {
	// 	try {
	// 		console.log('llego-->', req);
	// 		const params = {
	// 			// usuarioId:req.usuario,
	// 			// sucursalId:req.sucursal,
	// 			// rolId:req.rol,
	// 			productoId: req.params.id,
	// 		};
	// 		const response = await getProductoByID(params);
	// 		return res.status(response.status).send(response);
	// 	} catch (error) {
	// 		console.log('===>>', error);
	// 		return res
	// 			.status(500)
	// 			.send({ message: 'error in  getProduct -> ', error });
	// 	}
	// }

	// // para insertar cantidad actual
	// static async updateQtyProduct(req, res) {
	// 	try {
	// 		// console.log("-->",req.body);
	// 		let resp;
	// 		if (req.body.hasOwnProperty("producto")) {
	// 			resp = await setQTYProductById({ ...req.body.producto });
	// 		} else if (req.body.hasOwnProperty("productos")) {
	// 			resp = await setQTYProductsById({ productos: req.body.productos });
	// 		} else {
	// 			// console.log("objeto no reconocido");
	// 			resp.message = 'Error this json not contained products';
	// 			resp.status = 400;
	// 		}
	// 		return res.status(resp.status).send(resp);
	// 	} catch (error) {
	// 		console.log('-->', error);
	// 		return res
	// 			.status(500)
	// 			.send({ message: 'error in updateQtyProduct -> ', error });
	// 	}
	// }
}
module.exports = Productos;
