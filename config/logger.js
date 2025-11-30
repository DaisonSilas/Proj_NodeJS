// src/config/logger.js
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { LOGS_PATH } from "./paths.js";

// Garante que a pasta de logs existe
if (!fs.existsSync(LOGS_PATH)) {
  fs.mkdirSync(LOGS_PATH, { recursive: true });
}

// Cria stream para gravar no arquivo
const accessLogStream = fs.createWriteStream(
  path.join(LOGS_PATH, "access.log"),
  { flags: "a" }
);

export const loggerFile = morgan("combined", { stream: accessLogStream });
export const loggerConsole = morgan("dev");
