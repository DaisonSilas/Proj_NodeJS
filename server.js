import express from "express";
import usersRoutes from "./routes/users.js";
import productsRoutes from "./routes/products.js";
import { log } from "./middlewares/log.js";

const app = express();

// Middleware para interpretar JSON (importante)
app.use(express.json());

// Middleware de log
app.use(log);

// Rotas
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);

// Inicialização
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
