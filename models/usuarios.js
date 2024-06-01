const { Model, DataTypes, UUIDV4, literal } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class EmployeeModel extends Model {}

EmployeeModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: "id",
			defaultValue: sequelize.literal("nextval('public.\"seqEmp\"')"),
		},
		tpoperador_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		location_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: true, // May be nullable depending on your requirements
		},
		lastname: {
			type: DataTypes.STRING(30),
			allowNull: true, // May be nullable depending on your requirements
		},
		cedula: {
			type: DataTypes.STRING(10),
			allowNull: true, // May be nullable depending on your requirements
		},
		phonenumber: {
			type: DataTypes.STRING(15),
			allowNull: true, // May be nullable depending on your requirements
		},
		email: {
			type: DataTypes.STRING(20),
			allowNull: true, // May be nullable depending on your requirements
		},
		login: {
			type: DataTypes.STRING(30),
			allowNull: false, // Assuming username is required
		},
		pass: {
			type: DataTypes.STRING(10),
			allowNull: false, // Assuming password is required
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: false, // Assuming status is required
		},
	},
	{
		underscored: true, // Use underscores for column names (matches UsuarioModel)
		modelName: 'Employee', // Explicit model name
		tableName: 'employees', // Explicit table name
		timestamps: false, // Disable timestamps if not needed
		sequelize,
	}
);

module.exports = EmployeeModel;
// // Database
// const { Model, DataTypes, UUIDV4, literal } = require('sequelize');
// const { sequelize } = require('../config/database');

// class UsuarioModel extends Model {}

// UsuarioModel.init(
// 	{
// 		id: {
// 			type: DataTypes.INTEGER,
// 			primaryKey: true,
// 			allowNull: false,
// 		},
// 		rol_id: {
// 			type: DataTypes.INTEGER,
// 			allowNull: false,
// 		},
// 		login: {
// 			type: DataTypes.STRING(10),
// 		},
// 		password: {
// 			type: DataTypes.STRING(250),
// 		},
// 		zona: {
// 			type: DataTypes.STRING(100),
// 		},
// 		status: {
// 			type: DataTypes.STRING(1),
// 		},
// 		last_logged: {
// 			type: DataTypes.DATE,
// 			allowNull: true,
// 		},
// 	},
// 	{
// 		underscored: true,
// 		modelName: 'usuario',
// 		tableName: "usuarios",
// 		timestamps: false,
// 		sequelize,
// 	}
// );
// module.exports = UsuarioModel;
