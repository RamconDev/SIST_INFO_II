const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class ClientByCity extends Model {}

ClientByCity.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'ID', // Field name as defined in the view
		},
		nameCompany: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME_COMPANY', // Field name as defined in the view
		},
		namePerson: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'NAME_PERSON', // Field name as defined in the view
		},
		rif: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'RIF', // Field name as defined in the view
		},
		cedula: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CEDULA', // Field name as defined in the view
		},
		phoneNumber: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'PHONENUMBER', // Field name as defined in the view
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'EMAIL', // Field name as defined in the view
		},
		locationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'LOCATION_ID', // Field name as defined in the view
		},
	},
	{
		underscored: false, // Set to true if your view column names use snake_case
		freezeTableName: true, // Prevents sequelize from pluralizing the table name
		modelName: 'ClientByCity', // Explicit model name
		sequelize,
	}
);

module.exports = ClientByCity;
