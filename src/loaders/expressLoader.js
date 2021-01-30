import express from "express";
import morgan from "morgan";
import cors from "cors";

const expressLoader = (app) => {
    app.use(morgan("dev"));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
        res.send("희연이 테스트 중");
    });
};

export default expressLoader;
