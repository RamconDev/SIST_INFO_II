const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class Supplier extends Model {}

Supplier.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"seqSuplier\"')"),
		},
		locationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'location_id',
			references: {
				model: 'Location', // Assuming the model name for location table
				key: 'id',
			},
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'name',
		},
		phoneNumber: {
			type: DataTypes.STRING(20),
			allowNull: true,
			field: 'phonenumber',
		},
		address: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'addres', // Typo corrected to 'address'
		},
		email: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'email',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'Supplier',
		tableName: 'suppliers',
		timestamps: false, // Disable timestamps since no 'created_at' or 'updated_at' columns
		sequelize,
	}
);

module.exports = Supplier;
