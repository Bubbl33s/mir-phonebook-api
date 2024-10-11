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

  // Agenda Telefónica: Paso 4
  static async deleteContact(id: string) {
    const contactIndex = contacts.findIndex((contact) => contact.id === id);

    if (contactIndex === -1) {
      return null;
    }

    const deletedContact = contacts.splice(contactIndex, 1);

    return deletedContact;
  }
}
