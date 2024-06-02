const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class Dimension extends Model {}

Dimension.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"seqDimension\"')"),
		},
		description: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'description',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'Dimension',
		tableName: 'dimensions',
		timestamps: false, // Disable timestamps since no 'created_at' or 'updated_at' columns
		sequelize,
	}
);

module.exports = Dimension;
