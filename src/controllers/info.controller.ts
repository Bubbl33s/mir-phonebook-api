import { Request, Response, NextFunction } from "express";
import { InfoService } from "../services/info.service";

export class InfoController {
  // Agenda Telefónica: Paso 2
  static async getInfo(_: Request, res: Response, next: NextFunction) {
    try {
      const info = await InfoService.getInfo();

      if (!info) {
        res.status(404).json({ message: "Info not found" });
        return;
      }
      res.send(`
        <p>Phonebook has info for ${info.count} people</p>
        <p>Fecha: ${info.date}</p>
        `);
    } catch (error) {
      next(error);
    }
  }
}
