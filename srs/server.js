import express from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";

import { LOGS_PATH } from "./config/paths.js";

import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";
import { log } from "./middlewares/log.js";

const app = express();

// JSON
app.use(express.json());

// garante logs/
if (!fs.existsSync(LOGS_PATH)) {
  fs.mkdirSync(LOGS_PATH);
}

// write stream
const accessLogStream = fs.createWriteStream(
  path.join(LOGS_PATH, "access.log"),
  { flags: "a" }
);

// logs
app.use(morgan("combined", { stream: accessLogStream }));
app.use(morgan("dev"));
app.use(log);

// rotas
app.use("/api/v1/products", productsRoutes);
app.use("/api/v1/users", usersRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

// erro global
app.use((err, req, res, next) => {
  console.error("Erro:", err);
  res.status(500).json({ error: "Erro interno no servidor" });
});

// run
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
