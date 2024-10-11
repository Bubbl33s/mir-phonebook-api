import { Response, Request, NextFunction } from "express";
import { ContactService } from "../services/contact.service";

export class ContactController {
  // Agenda Telefónica: Paso 1
  static async getContacts(_: Request, res: Response, next: NextFunction) {
    try {
      const contacts = await ContactService.getContacts();

      if (!contacts) {
        res.status(404).json({ message: "Contacts not found" });
        return;
      }
      res.json(contacts);
    } catch (error) {
      next(error);
    }
  }
}
