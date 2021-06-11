import express from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

import swagger from "../../swagger.json";
import routes from "../api/routes";

const Express = (app) => {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", routes());
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swagger, { explorer: true })
  );

  app.get("/", (req, res) => {
    res.send("<h1>Guidebus Server</h1>");
  });
};

export default Express;
