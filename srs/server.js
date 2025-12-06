// src/server.js
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js"; // <-- importa o app completo

// Porta definida no .env ou fallback para 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
