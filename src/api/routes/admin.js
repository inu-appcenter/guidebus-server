import { Router } from "express";

import Middlewares from "../middlewares";
import Controllers from "../controllers";

const router = Router();

const adminRouter = (app) => {
  app.use("/admin", router);

  router.get("/", Controllers.Admin.login, Middlewares.Auth.sign, (req, res) => {
    return res.status(200).json({ success: true, token: req.token });
  });
};

export default adminRouter;
