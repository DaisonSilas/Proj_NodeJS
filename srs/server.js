// src/server.js
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";               // importa o app
import { logger } from "./config/logger.js"; // importa o logger AQUI

// Agora sim você pode usar o logger
logger.info("Servidor iniciado...");
logger.error("Erro no servidor...");

// Porta definida no .env ou padrão 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
