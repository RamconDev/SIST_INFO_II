const jwt = require("jsonwebtoken");
require("dotenv").config();

// const UsuarioModel = require("../models/usuarios");
// Service
// const { singIn, mewUser, allUser } = require("../services/user_service");

class User {
	static async getOne(req, res) {
		// console.log('==>',req);
		try {
			const response = await singIn(req.body);
			return res.status(200).send(response);
		} catch (error) {
			return res.status(500).send({ message: "error -> ", error });
		}
	}

	// static async getAll(req, res) {
	// 	// console.log('==>',req);
	// 	try {
	// 		const response = await singIn(req.body);
	// 		return res.status(200).send(response);
	// 	} catch (error) {
	// 		return res.status(500).send({ message: "error -> ", error });
	// 	}
	// }

	// static async createRol(req, res) {
	// 	try {
	// 		const response = await mewUser(req.body);
	// 		return res.status(response.status).send(response);
	// 	} catch (error) {
	// 		return res.status(500).send({ message: "error -> ", error });
	// 	}
	// }

	// static async setRol(req, res) {
	// 	try {
	// 		const response = await allUser(req.query);
	// 		return res.status(response.status).send(response);
	// 	} catch (error) {
	// 		return res.status(500).send({ message: "error -> ", error });
	// 	}
	// }
}

module.exports = User;
