import dotenv from "dotenv";
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const database = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
};

export default {
  port: 9001,
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
  secret: process.env.JWT_SECRET,
  database,
};
