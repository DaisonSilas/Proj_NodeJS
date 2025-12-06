import express from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { LOGS_PATH } from "./config/paths.js";
import dotenv from "dotenv";
dotenv.config();


import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";

import { log } from "./middlewares/log.js";
import { errorHandler } from "./middlewares/errorHandler.js";


const app = express();
app.use(express.json());

// Rotas
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

// Middleware de erro (sempre no fim)
app.use(errorHandler);

app.listen(3000, () => console.log("Servidor rodando!"));
