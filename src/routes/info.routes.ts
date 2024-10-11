import { Router } from "express";
import { InfoController } from "../controllers/info.controller";

const router = Router();
const PREFIX = "/info";

// Agenda Telefónica: Paso 2
router.get(PREFIX, InfoController.getInfo);

export default router;
