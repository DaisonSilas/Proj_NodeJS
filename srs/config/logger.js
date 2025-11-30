import winston from "winston";
import path from "path";
import { LOGS_PATH } from "./paths.js";

// Cria formato personalizado p/ console
const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf(
    ({ level, message, timestamp }) => `[${timestamp}] ${level}: ${message}`
  )
);

// Cria formato p/ arquivo
const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

export const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: consoleFormat,
    }),
    new winston.transports.File({
      filename: path.join(LOGS_PATH, "server.log"),
      format: fileFormat,
    }),
  ],
});
