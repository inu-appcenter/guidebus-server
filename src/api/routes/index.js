import { Router } from "express";

import AdminRouter from "./admin";
import BoardRouter from "./board";

export default () => {
  const app = Router();

  AdminRouter(app);
  BoardRouter(app);

  return app;
};
