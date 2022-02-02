import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME!;
const username = process.env.DB_USER!.toString();
const pass = process.env.DB_PASS!.toString();
// const host = process.env.DB_HOST!;
const port = process.env.DB_PORT!;

const sequelize = new Sequelize(dbName, username, pass, {
  host: "database-1-instance-1.ctg9w92cl5iw.ap-southeast-1.rds.amazonaws.com",
  dialect: "mysql",
  port: parseInt(port),
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 3000,
  },
  logging: false,
});

export default sequelize;
