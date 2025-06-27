import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const books = sequelize.define("books",{
    id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey: true,},
    title: {type: DataTypes.STRING, allowNull: false, unique:true },
    author:{type: DataTypes.STRING, allowNull:false},
    pages:{type: DataTypes.INTEGER, allowNull:false},
    genre:{type: DataTypes.ENUM("romantico", "ciencia ficion", "novelas", "drama", "especiales"), allowNull:false},
    description:{type: DataTypes.STRING }
});
export default books;