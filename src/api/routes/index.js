import { Router } from "express";
import AdminRouter from "./admin";

export default () => {
  const app = Router();

  AdminRouter(app);
};
