const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class EmployeesDepLocModel extends Model {}

EmployeesDepLocModel.init(
	{
		departmentId: {
			// Adjust casing if necessary
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'departmentId', // Specify field name to match view column
		},
		department_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		locationId: {
			// Adjust casing if necessary
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'locationId', // Specify field name to match view column
		},
		locationName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		employee_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		cedula: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phonenumber: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'EmployeesDepLoc', //  Use singular model name
		tableName: 'employee_dep_loc', // Name of the view in PostgreSQL
		schema: 'public', // Schema name (if applicable)
	}
);

// Export the model for usage
module.exports = EmployeesDepLocModel;
