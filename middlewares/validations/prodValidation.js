const Joi = require("joi");

const createProduct = Joi.object({
	category_id: Joi.number().required(),
	ancestor_id: Joi.number(),
	name: Joi.string().required(),
	description: Joi.string().required(),
	margin: Joi.number(),
});
// const newuser = Joi.object({
// 	tpoperador_id: Joi.number().required(),
// 	location_id: Joi.number().required(),
// 	name: Joi.string().required(),
// 	lastname: Joi.string().required(),
// 	cedula: Joi.string().required(),
// 	phonenumber: Joi.string(),
// 	email: Joi.string(),
// 	login: Joi.string().required(),
// 	pass: Joi.string().required(),
// });
module.exports = {
	createProduct,
	// newuser,
};
