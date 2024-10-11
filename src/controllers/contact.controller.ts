import { Response, Request, NextFunction } from "express";
import { ContactService } from "../services/contact.service";
import { CreateContact } from "../types/contact.type";

export class ContactController {
  // Agenda Telefónica: Paso 1
  static async getContacts(_: Request, res: Response, next: NextFunction) {
    try {
      const contacts = await ContactService.getContacts();

      if (!contacts) {
        res.status(404).json({ "Error 404": "Contacts not found" });
        return;
      }
      res.json(contacts);
    } catch (error) {
      next(error);
    }
  }

  // Agenda Telefónica: Paso 3
  static async getContactById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const contact = await ContactService.getContactById(id);

      if (!contact) {
        res
          .status(404)
          .send({ "Error 404": `Contact with ID ${id} not found` });
        return;
      }
      res.json(contact);
    } catch (error) {
      next(error);
    }
  }

  // Agenda Telefónica: Paso 4
  static async deleteContact(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const deletedContact = await ContactService.deleteContact(id);

      if (!deletedContact) {
        res
          .status(404)
          .send({ "Error 404": `Contact with ID ${id} not found` });
        return;
      }
      res.json(deletedContact);
    } catch (error) {
      next(error);
    }
  }

  // Agenda Telefónica: Paso 5
  static async addContact(req: Request, res: Response, next: NextFunction) {
    try {
      const contact: CreateContact = req.body;

      // Agenda Telefónica: Paso 6
      // Validar que el nombre y número de teléfono no estén vacíos
      if (!contact.name || !contact.number) {
        res.status(400).json({ "Error 400": "Name and number are required" });
        return;
      }

      // Validar que el nombre no esté duplicado
      if (await ContactController.nameExists(contact.name)) {
        res.status(400).json({ "Error 400": `Name must be unique` });
        return;
      }

      const newId = Math.floor(Math.random() * 2000).toString();

      const newContact = await ContactService.addContact({
        id: newId,
        ...contact,
      });

      res.json(newContact);
    } catch (error) {
      next(error);
    }
  }

  // Agenda Telefónica: Paso 6
  static async nameExists(name: string) {
    const contacts = await ContactService.getContacts();
    return contacts.some(
      // lowercase para una mejor comparación
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );
  }
}
