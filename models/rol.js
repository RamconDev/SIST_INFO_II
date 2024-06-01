const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");

class rolModel extends Model {}

rolModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id', // Map 'id' column to model property
		},
		ancestorId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ancestor_id', // Map 'ancestor_id' column to model property
		},
		name: {
			type: DataTypes.STRING(15),
			allowNull: false,
			field: 'name', // Map 'name' column to model property
		},
	},
	{
		tableName: 'tipo_operador', // Use 'tipo_operador' table name
		modelName: 'RolModel', // Keep the model name 'RolModel'
		timestamps: false,
		underscored: true,
		sequelize,
	}
);

module.exports = rolModel;
