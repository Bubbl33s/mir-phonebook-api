import contacts from "../models/contact.model";

export class InfoService {
  // Agenda Telefónica: Paso 2
  static async getInfo() {
    return {
      count: contacts.length,
      date: new Date(),
    };
  }
}
