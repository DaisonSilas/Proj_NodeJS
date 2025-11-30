// src/app.js
import express from "express";
import { loggerFile, loggerConsole } from "./config/logger.js";
import { log } from "./middlewares/log.js";
import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";

const app = express();

// Middleware para JSON
app.use(express.json());

// Logs
app.use(loggerFile);
app.use(loggerConsole);

// Seu log personalizado
app.use(log);

// Rotas
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

export default app;
