import express from "express";
import setupApp from "./config/express.config";

const app = express();
setupApp(app);

export default app;
