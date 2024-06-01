const { Model, DataTypes } = require('sequelize');
const { sequelize } = require("../config/database");

class ProductoModel extends Model {}

ProductoModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			defaultValue: sequelize.literal("nextval('public.\"seqPro\"')"),
		},
		category_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				// Define foreign key relationship
				model: 'CategoriaProducto', // Assuming model name for the category table
				key: "id",
			},
		},
		ancestor_id: {
			// Include the ancestor_id column
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		name: {
			// Use "name" instead of "nombre" for clarity
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		description: {
			// Use "description" instead of "descripcion" for clarity
			type: DataTypes.STRING(100), // Adjust length if needed
			allowNull: true,
		},
		qty: {
			// Use "qty" for consistency with the table definition
			type: DataTypes.DECIMAL(12, 3),
			allowNull: true,
		},
		price_cost: {
			// Use "price_cost" for consistency with the table definition
			type: DataTypes.DECIMAL(14, 3),
			allowNull: true,
		},
		margin: {
			type: DataTypes.DECIMAL(2),
			allowNull: true,
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
		},
	},
	{
		sequelize,
		modelName: 'Producto', // Use singular model name (convention)
		tableName: 'products',
		timestamps: false,
	}
);

module.exports = ProductoModel;
