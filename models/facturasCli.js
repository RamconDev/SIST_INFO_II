const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class ClientInvoice extends Model {}

ClientInvoice.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'ID',
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'CREATED_AT',
		},
		amtTotal: {
			type: DataTypes.DECIMAL(10, 3), // Assuming total amount has precision (10) and scale (3)
			allowNull: true,
			field: 'AMT_TOTAL',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'STATUS',
		},
		clientId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'CLIENT_ID',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches view schema)
		modelName: 'ClientInvoice',
		tableName: 'CLIENT_INVOICES', // Use view name for reference
		freezeTableName: true, // Prevent sequelize from pluralizing the table name
		timestamps: false, // Disable timestamps since the view doesn't have them
		sequelize,
	}
);

module.exports = ClientInvoice;
