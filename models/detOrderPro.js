const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class OrderDetail extends Model {}

OrderDetail.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"setOrderPro\"')"),
		},
		orderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'order_id',
			references: {
				model: 'Order', // Assuming the model name for the Order table
				key: 'id',
			},
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'products_id',
			references: {
				model: 'Product', // Assuming the model name for the products table
				key: 'id',
			},
		},
		qty: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3) for quantity
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
		modelName: 'OrderDetail',
		tableName: 'details_orders',
		timestamps: false, // Disable timestamps since no 'created_at' or 'updated_at' columns
		sequelize,
	}
);

module.exports = OrderDetail;
