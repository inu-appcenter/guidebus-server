import { Router } from "express";
import cors from "cors";

import Middlewares from "../middlewares";
import Controllers from "../controllers";

const router = Router();

const adminRouter = (app) => {
  app.use("/admin", cors(), router);

  router.get("/login", Controllers.Admin.login, Middlewares.Auth.sign, (req, res) => {
    return res.status(200).json({ success: true, token: req.token });
  });
};

export default adminRouter;
