import contacts from "../models/contact.model";

export class ContactService {
  // Agenda Telefónica: Paso 1
  static async getContacts() {
    return contacts;
  }
}
