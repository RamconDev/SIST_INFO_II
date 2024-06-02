const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class InvoiceSupplier extends Model {}

InvoiceSupplier.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"seqFacProv\"')"),
		},
		supplierId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'suppliers_id',
			references: {
				model: 'Supplier', // Assuming the model name for suppliers table
				key: 'id',
			},
		},
		employeeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'employee_id',
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'created_at',
		},
		amtTotal: {
			type: DataTypes.DECIMAL(10, 3), // Numeric with precision (10) and scale (3)
			allowNull: true,
			field: 'amt_total',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'InvoiceSupplier',
		tableName: 'invoice_supplier',
		timestamps: false, // Disable timestamps since 'created_at' is already defined
		sequelize,
	}
);

module.exports = InvoiceSupplier;
