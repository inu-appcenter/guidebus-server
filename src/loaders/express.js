import express from "express";
import morgan from "morgan";
import cors from "cors";

const Express = (app) => {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("<h1>Guidebus Server</h1>");
  });
};

export default Express;
