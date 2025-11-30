import express from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { LOGS_PATH } from "./config/paths.js";
import usersRoutes from "./routes/users.js";
import { log } from "./middlewares/log.js";
import { router as productsRoutes } from "./routes/products.js";



const app = express();


// Aceitar JSON
app.use(express.json());


// Garantir pasta logs
if (!fs.existsSync(LOGS_PATH)) {
fs.mkdirSync(LOGS_PATH);
}


// Stream para escrita de logs
const accessLogStream = fs.createWriteStream(
path.join(LOGS_PATH, "access.log"),
{ flags: "a" }
);


// Morgan (arquivo)
app.use(morgan("combined", { stream: accessLogStream }));


// Morgan (console)
app.use(morgan("dev"));


// Log personalizado
app.use(log);


// Rotas
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);


app.listen(3000, () => {
console.log("Servidor rodando na porta 3000");
});