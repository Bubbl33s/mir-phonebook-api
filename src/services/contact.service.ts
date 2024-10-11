import contacts from "../models/contact.model";

export class ContactService {
  static async getContacts() {
    return contacts;
  }
}
