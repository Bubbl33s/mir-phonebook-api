import { Router } from "express";
import { ContactController } from "../controllers/contact.controller";

const router = Router();
const PREFIX = "/persons";

router.get(PREFIX, ContactController.getContacts);

export default router;
