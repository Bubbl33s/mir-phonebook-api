import { Response, Request } from "express";
import { ContactService } from "../services/contact.service";

export class ContactController {
  static async getContacts(_: Request, res: Response) {
    try {
      const contacts = await ContactService.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "error" });
    }
  }
}
