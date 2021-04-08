import { Router } from "express";

import Middlewares from "../middlewares";
import Controllers from "../controllers";

const router = Router();

const adminRouter = (app) => {
  app.use("/admin", router);

  router.post("/signin", Controllers.Admin.signin, Middlewares.Auth.sign);
  router.post("/signup", Controllers.Admin.signup);
};

export default adminRouter;
