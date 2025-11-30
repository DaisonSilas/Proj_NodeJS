import express from "express";
import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());

// Rotas
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

// Middleware de erro (sempre no fim)
app.use(errorHandler);

app.listen(3000, () => console.log("Servidor rodando!"));
