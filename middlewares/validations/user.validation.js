const Joi = require("joi");

const loginSchema = Joi.object({
	login: Joi.string().required(),
	password: Joi.string().required(),
});
const newuser = Joi.object({
	tpoperador_id: Joi.number().required(),
	location_id: Joi.number().required(),
	name: Joi.string().required(),
	lastname: Joi.string().required(),
	cedula: Joi.string().required(),
	phonenumber: Joi.string(),
	email: Joi.string(),
	login: Joi.string().required(),
	pass: Joi.string().required(),
});
const queryEmpDptoLoc= Joi.object({
	dptoid:Joi.number().required(),
	locid:Joi.number().required(),
});
module.exports = {
	loginSchema,
	newuser,
	queryEmpDptoLoc,
};
