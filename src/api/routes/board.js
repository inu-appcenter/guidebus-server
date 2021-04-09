import { Router } from "express";

const router = Router();

const boardRouter = (app) => {
  app.use("/board", router);
};

export default boardRouter;
