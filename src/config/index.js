import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
    port: 9001,
    logs: {
        level: process.env.LOG_LEVEL || "silly",
    },
};
