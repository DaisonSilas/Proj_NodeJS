import express from "express";
import { log } from "./middlewares/log.js";
import usersRoutes from "./routes/users.js";

const app = express();

app.use(log);
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
