import sequelize from "../utils/sequelize";
import { DataTypes, Model, Optional } from "sequelize";

interface IEmployeAttr {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

interface IEmployeCreation extends Optional<IEmployeAttr, "id"> {}

class Employe
  extends Model<IEmployeAttr, IEmployeCreation>
  implements IEmployeAttr
{
  id!: number;
  email!: string;
  firstName!: string;
  lastName!: string;
}

Employe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(125),
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "employes",
    sequelize, // passing the `sequelize` instance is required
  }
);

export default Employe;
