const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class Quote extends Model {}

Quote.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"seqQuotesCli\"')"),
		},
		clientId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'clients_id',
			references: {
				model: 'Client', // Assuming the model name for clients table
				key: 'id',
			},
		},
		ancestorId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ancestor_id',
			references: {
				model: 'Quote', // Self-referencing relationship
				key: 'id',
			},
		},
		employeeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'employee_id',
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'created_at',
		},
		totalQty: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3)
			allowNull: true,
			field: 'total_qty',
		},
		totalAmount: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3)
			allowNull: true,
			field: 'total_amt',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'Quote',
		tableName: 'quotes',
		timestamps: false, // Disable timestamps since 'created_at' is already defined
		sequelize,
	}
);

module.exports = Quote;
