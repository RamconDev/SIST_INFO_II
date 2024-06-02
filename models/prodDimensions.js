const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class ProductDimension extends Model {}

ProductDimension.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"prodDim\"')"),
			primaryKey: true, // Part of the composite primary key
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'products_id',
			primaryKey: true, // Part of the composite primary key
		},
		dimensionId: {
			// Corrected naming convention (singular for foreign key)
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'dimensions_id',
			references: {
				model: 'Dimension', // Assuming the model name for dimensions table
				key: 'id',
			},
		},
		value: {
			type: DataTypes.DECIMAL(5, 2), // Numeric with precision (5) and scale (2) for value
			allowNull: true,
			field: 'value',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'ProductDimension',
		tableName: 'product_dim',
		timestamps: false, // Disable timestamps since no 'created_at' or 'updated_at' columns
		sequelize,
	}
);

module.exports = ProductDimension;
