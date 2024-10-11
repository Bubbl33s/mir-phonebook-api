import { Application } from "express";
import contactRoutes from "./contact.routes";
import infoRoutes from "./info.routes";

export default function setupRoutes(app: Application) {
  const API_PREFIX = "/api";

  // Agenda Telefónica: Paso 1
  app.use(API_PREFIX, contactRoutes);

  // Agenda Telefónica: Paso 2
  app.use("/", infoRoutes);
}
