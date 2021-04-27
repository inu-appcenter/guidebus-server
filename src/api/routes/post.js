import { Router } from "express";

const router = Router();

const postRouter = (app) => {
  app.use("/post", router);
};

export default postRouter;
