import express from "express";
import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";
import { log } from "./middlewares/log.js";

import morgan from "morgan";
import fs from "fs";
import path from "path";

const app = express();

// Middleware para aceitar JSON
app.use(express.json());

// ================================
// LOG - MORGAN
// ================================

// Criar pasta logs caso não exista
const logsPath = path.join(process.cwd(), "logs");
if (!fs.existsSync(logsPath)) {
  fs.mkdirSync(logsPath);
}

// Cria o stream de escrita para o arquivo de log
const accessLogStream = fs.createWriteStream(
  path.join(logsPath, "access.log"),
  { flags: "a" } // 'a' = append
);

// Log em arquivo (formato "combined" é padrão NGINX/Apache)
app.use(morgan("combined", { stream: accessLogStream }));

// Log no console
app.use(morgan("dev"));

// ================================
// LOG PERSONALIZADO (SEU MIDDLEWARE)
// ================================
app.use(log);

// ================================
// ROTAS
// ================================
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

// ================================
// SERVIDOR
// ================================
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
