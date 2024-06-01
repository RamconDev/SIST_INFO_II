const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
// eslint-disable-next-line import/no-extraneous-dependencies
const moment = require('moment');
const {
	loginSchema,
	newuser,
	queryEmpDptoLoc,
} = require("../middlewares/validations/user.validation");
const UsuarioModel = require('../models/usuarios');
const Usuariodptoloc = require('../models/viewEmp');
// const SucUsuario = require("../models/user_sucursal");
// const Sucursal = require("../models/sucursal");

async function singIn(params) {
	const response = {
		message: "user not registered",
		status: 401,
		data: null,
	};
	// console.log("===-->>>",params);
	try {
		const { login, password } = await loginSchema.validateAsync(params);
		// console.log('login',login);
		const oneClient = await UsuarioModel.findOne({ where: { login } });
		// console.log("==>",oneClient);
		if (oneClient) {
			const validatePass = await bcrypt.compare(password, oneClient.pass);

			if (validatePass) {
				const token = jwt.sign(
					{
						id: oneClient.id,
						date: oneClient.tpoperador_id,
					},
					process.env.SECRET_KEY,
					{
						expiresIn: "1d",
					}
				);

				response.data = token;
				response.status = 200;
				response.message = `el Usuario: ${oneClient.login}, Ha sido autorizado `;
			} else {
				response.message = 'password incorrect';
				response.status = 401;
			}
		}
	} catch (error) {
		// console.log('-->', error);
		response.message = error.details[0].message;
		response.status = 400;
	}
	return response;
}
async function mewUser(params) {
	const response = {
		message: "user is not possible created",
		status: 401,
		data: null,
	};
	// console.log("llego",params);
	try {
		const {
			tpoperador_id,
			location_id,
			name,
			lastname,
			cedula,
			phonenumber,
			email,
			login,
			pass,
		} = await newuser.validateAsync(params);
		// console.log("-->",tpoperador_id);
		const hashedPassword = await bcrypt.hash(pass, 10);
		const newUser = await UsuarioModel.create({
			tpoperador_id,
			location_id,
			name,
			lastname,
			cedula,
			phonenumber,
			email,
			login,
			hashedPassword,
			status: 'A',
		});
		if (newUser) {
			response.message = 'was create user new';
			response.status = 201;
			response.data = newUser;
		}
	} catch (error) {
		// console.log('==>',error);
		response.message = error.details[0].message;
		response.status = 400;
	}
	return response;
}
async function allUser(params) {
	const response = {
		message: "user is not possible created",
		status: 401,
		data: null,
	};
	try {
		const { dptoid, locid } = await queryEmpDptoLoc.validateAsync(params);
		const res = await Usuariodptoloc.findAll({
			where: { departmentid: dptoid, locationid: locid },
			attributes: ['employee_id', 'name', 'lastname', 'cedula','phonenumber','email','status'],
		});
		// console.log(users);
		if (res) {
			response.data = res;
			response.message = 'employees found by this location and departament';
			response.status = 200;
		}	
	} catch (error) {
		response.message = error.details[0].message;
		response.status = 400;
	}
	return response;
}
module.exports = {
	singIn,
	mewUser,
	allUser,
};
