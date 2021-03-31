import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "../api/routes";

const Express = (app) => {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", routes());

  app.get("/", (req, res) => {
    res.send("<h1>Guidebus Server</h1>");
  });
};

export default Express;
