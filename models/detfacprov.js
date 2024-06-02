const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class InvoiceSupplierDetail extends Model {}

InvoiceSupplierDetail.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
		},
		invoiceSupplierId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'invoicesupplier_id',
			references: {
				model: 'InvoiceSupplier', // Assuming the model name for invoice_supplier table
				key: 'id',
			},
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'products_id',
			references: {
				model: 'Product', // Assuming the model name for products table
				key: 'id',
				defaultValue: sequelize.literal("nextval('public.\"detFacProv\"')"),
			},
		},
		qty: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3) for quantity
			allowNull: true,
			field: 'qty',
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'created_at',
		},
		priceCost: {
			// Corrected typo 'price_cost'
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3) for price
			allowNull: true,
			field: 'price_cost',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'InvoiceSupplierDetail',
		tableName: 'det_invoicesupplier',
		timestamps: false, // Disable timestamps since 'created_at' is already defined
		sequelize,
	}
);

module.exports = InvoiceSupplierDetail;
