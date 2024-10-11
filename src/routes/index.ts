import { Application } from "express";
import contactRoutes from "./contact.routes";

export default function setupRoutes(app: Application) {
  const API_PREFIX = "/api";
  app.use(API_PREFIX, contactRoutes);
}
