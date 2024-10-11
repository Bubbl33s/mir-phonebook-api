import { Router } from "express";
import { ContactController } from "../controllers/contact.controller";

const router = Router();
// Se agrega el prefijo solicitado /persons
const PREFIX = "/persons";

// Agenda Telefónica: Paso 1
router.get(PREFIX, ContactController.getContacts);
// Agenda Telefónica: Paso 3
router.get(`${PREFIX}/:id`, ContactController.getContactById);

export default router;
