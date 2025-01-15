import express from "express";
import router from "./router";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.use("/images", express.static(path.join(__dirname, "src/images")));

export default app;
