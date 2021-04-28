import { Router } from "express";

import AdminRouter from "./admin";
import PostRouter from "./post";

export default () => {
  const app = Router();

  AdminRouter(app);
  PostRouter(app);

  return app;
};
