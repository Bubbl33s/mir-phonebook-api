import { Request, Response, NextFunction } from "express";

// Manejo de errores globales
export default function errorHandler(
  err: any,
  _: Request,
  res: Response,
  __: NextFunction,
) {
  if (err instanceof Error) {
    res.status(400).json({ "error 400": err.message });
  } else {
    res.status(500).json({ "error 500": "Error interno del servidor" });
  }
}
