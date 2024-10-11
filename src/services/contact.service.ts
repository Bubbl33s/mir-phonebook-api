import contacts from "../models/contact.model";

export class ContactService {
  // Agenda Telefónica: Paso 1
  static async getContacts() {
    return contacts;
  }

  // Agenda Telefónica: Paso 3
  static async getContactById(id: string) {
    return contacts.find((contact) => contact.id === id);
  }
}
