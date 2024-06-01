const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class InvoiceClientDetail extends Model {}

InvoiceClientDetail.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"detFacCli\"')"),
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'products_id',
			references: {
				model: 'Product', // Assuming the model name for products table
				key: 'id',
			},
		},
		invoiceClientId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'invoiceclients_id',
			references: {
				model: 'InvoiceClient', // Assuming the model name for invoice_clients table
				key: 'id',
			},
		},
		qty: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3)
			allowNull: true,
			field: 'qty',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'InvoiceClientDetail',
		tableName: 'det_invoiceclient',
		timestamps: false, // Disable timestamps since no 'created_at' or 'updated_at' columns
		sequelize,
	}
);

module.exports = InvoiceClientDetail;
