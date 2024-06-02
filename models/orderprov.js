const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class Order extends Model {}

Order.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"seqOrderProv\"')"),
		},
		orderId: {
			// Corrected naming convention (avoid reserved words)
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'order_id',
			references: {
				model: 'Order', // Assuming the model name for itself (recursive relationship)
				key: 'id',
			},
		},
		supplierId: {
			// Corrected naming convention (singular for foreign key)
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
		totalQty: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3)
			allowNull: true,
			field: 'total_qty',
		},
		totalAmount: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3)
			allowNull: true,
			field: 'total_amt',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'Order', // Use singular form for model name
		tableName: '"ORDER"', // Use double quotes for table name
		timestamps: false, // Disable timestamps since 'created_at' is already defined
		sequelize,
	}
);

module.exports = Order;
