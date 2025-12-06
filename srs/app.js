import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { loggerFile, loggerConsole } from "./config/logger.js";
import { log } from "./middlewares/log.js";
import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";

const app = express();

app.use(express.json());

app.use(loggerFile);
app.use(loggerConsole);
app.use(log);

// Rotas
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

export default app;
