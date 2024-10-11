import { Router } from "express";
import { ContactController } from "../controllers/contact.controller";

const router = Router();
// Se agrega el prefijo solicitado /persons
const PREFIX = "/persons";

// Agenda Telefónica: Paso 1
router.get(PREFIX, ContactController.getContacts);
// Agenda Telefónica: Paso 3
router.get(`${PREFIX}/:id`, ContactController.getContactById);
// Agenda Telefónica: Paso 4
router.delete(`${PREFIX}/:id`, ContactController.deleteContact);

export default router;
