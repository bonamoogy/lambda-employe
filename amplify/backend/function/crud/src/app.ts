import express from "express";
import awsServerlessExpressMiddleware from "aws-serverless-express/middleware";
import { json } from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import sequelize from "./utils/sequelize";
import { errorRequest, routeNotFound } from "./middlewares/error-routes";
import employeRoutes from "./routes/employe-routes";
import isAuth from "./middlewares/isAuth";

const PORT = 3000;

const app = express();

app.use(awsServerlessExpressMiddleware.eventContext());
app.use(json());
app.use(cors());
app.use("/employes", isAuth, employeRoutes);

app.use(routeNotFound);
app.use(errorRequest);

sequelize
  .sync({
    // force: true,
  })
  .then(() => {
    console.log("DB Connect..");
    app.listen(PORT || 8000, () => {
      console.log("App is Running");
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

export default app;
