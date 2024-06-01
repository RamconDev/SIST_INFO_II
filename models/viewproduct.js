const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

class ProductbyCategory extends Model {} // Use a descriptive model name

ProductbyCategory.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name', // Specify field name to match view column
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'description', // Specify field name to match view column
		},
		qty: {
			type: DataTypes.DECIMAL(12, 3),
			allowNull: true,
			field: 'qty', // Specify field name to match view column
		},
		price_cost: {
			type: DataTypes.DECIMAL(14, 3),
			allowNull: true,
			field: 'price_cost', // Specify field name to match view column
		},
		margin: {
			type: DataTypes.DECIMAL(2),
			allowNull: true,
			field: 'margin', // Specify field name to match view column
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status', // Specify field name to match view column
		},
		categoryId: {
			// Use singular and camelCase for clarity
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'categoryid', // Specify field name to match view column
		},
		catName: {
			// Use singular and camelCase for clarity
			type: DataTypes.STRING,
			allowNull: false,
			field: 'catname', // Specify field name to match view column
		},
		dimId: {
			// Use singular and camelCase for clarity
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'dimid', // Specify field name to match view column
		},
		dimName: {
			// Use singular and camelCase for clarity
			type: DataTypes.STRING,
			allowNull: true,
			field: 'dimname', // Specify field name to match view column
		},
		value: {
			type: DataTypes.DECIMAL, // Adjust data type if necessary
			allowNull: true,
			field: 'value', // Specify field name to match view column
		},
		pricesell:{
			type: DataTypes.DECIMAL, // Adjust data type if necessary
			allowNull: true,
			field: 'pricesell', // Specify field name to match view column
		}
	},
	{
		underscored: true, // Respect the view's column naming convention
		modelName: 'ProductbyCategory', // Use singular model name
		tableName: 'productbycat', // Name of the view in PostgreSQL
		sequelize,
	}
);

module.exports = ProductbyCategory;
