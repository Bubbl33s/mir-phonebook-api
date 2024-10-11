import express from "express";
import setupApp from "./config/express.config";
import setupRoutes from "./routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();
setupApp(app);
setupRoutes(app);
// Se agrega el middleware errorHandler
app.use(errorHandler);

export default app;
