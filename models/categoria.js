const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class Category extends Model {}

Category.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"seqCategory\"')"),
		},
		name: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'name',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'Category',
		tableName: 'category',
		timestamps: false, // Disable timestamps since no 'created_at' or 'updated_at' columns
		sequelize,
	}
);

module.exports = Category;
