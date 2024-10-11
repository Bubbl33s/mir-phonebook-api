import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

// Configuración de la aplicación
export default function setupApp(app: Application) {
  const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type"],
  };

  app.use(cors(corsOptions));
  app.use(express.json());

  app.use(helmet());
  app.use(compression());
  // Agenda Telefónica: Paso 7
  // app.use(morgan("tiny"));

  // Agenda Telefónica: Paso 8
  // Mostrar el cuerpo de las peticiones POST
  morgan.token("body", (req) => {
    if (req.method === "POST") {
      return JSON.stringify((req as express.Request).body);
    }
    return "";
  });

  app.use(
    morgan(
      ":method :url :status :res[content-length] - :response-time ms :body",
    ),
  );
}
