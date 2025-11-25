import express from "express";
import productsRoutes from "./routes/products.js";
import usersRoutes from "./routes/users.js";
import { log } from "./middlewares/log.js";

const app = express();

app.use(express.json());
app.use(log);

app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
