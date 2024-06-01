const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

class BancoModel extends Model {}

BancoModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		nombre: {
			type: DataTypes.STRING(100),
		},
	},
	{
		modelName: 'BancoModel',
		tableName: 'bancos',
		underscored: true,
		timestamps: false,
		sequelize,
	}
);

module.exports = BancoModel;