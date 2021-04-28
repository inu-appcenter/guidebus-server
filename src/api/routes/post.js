import { Router } from "express";

import Controllers from "../controllers";

const router = Router();

const postRouter = (app) => {
  app.use("/post", router);

  router.get("/view", Controllers.Post.view);
  router.post("/insert", Controllers.Post.insert);
  router.patch("/update", Controllers.Post.update);
  router.delete("/delete", Controllers.Post.delete);
};

export default postRouter;
