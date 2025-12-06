import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { logger } from "./config/logger.js";
import { log } from "./middlewares/log.js";
import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

// Logger para cada request
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Seu log customizado
app.use(log);

// Rotas
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

export default app;
