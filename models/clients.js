const { Model, DataTypes, literal } = require("sequelize");
const { sequelize } = require("../config/database");

class ClienteModel extends Model {}

ClienteModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: "id",
			defaultValue: sequelize.literal("nextval('public.\"seqClient\"')"),
		},
		location_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: "location_id",
		},
		name_company: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: "name_company",
		},
		name_person: {
			type: DataTypes.STRING(40),
			allowNull: false,
			field: "name_person",
		},
		rif: {
			type: DataTypes.STRING(10),
			allowNull: true,
			field: "rif",
		},
		cedula: {
			type: DataTypes.STRING(10),
			allowNull: false,
			field: "cedula",
		},
		phonenumber: {
			type: DataTypes.STRING(15),
			allowNull: true,
			field: "phonenumber",
		},
		email: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: "email",
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: "status",
		},
	},
	{
		modelName: "ClienteModel",
		tableName: "clients",
		timestamps: false,
		underscored: true,
		sequelize,
	}
);

module.exports = ClienteModel;
