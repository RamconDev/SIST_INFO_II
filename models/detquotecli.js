const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class QuoteDetail extends Model {}

QuoteDetail.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"detQuotesCli\"')"),
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
		quoteId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'quotes_id',
			references: {
				model: 'Quote', // Assuming the model name for quotes table
				key: 'id',
			},
		},
		qty: {
			type: DataTypes.DECIMAL(7, 3), // Numeric with precision (7) and scale (3) for quantity
			allowNull: true,
			field: 'qty',
		},
		amtPrice: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3) for price
			allowNull: true,
			field: 'amt_price',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'QuoteDetail',
		tableName: 'details_quotes',
		timestamps: false, // Disable timestamps since no 'created_at' or 'updated_at' columns
		sequelize,
	}
);

module.exports = QuoteDetail;
