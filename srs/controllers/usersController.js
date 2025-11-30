import { users } from "../data/users.js";
import { logger } from "../config/logger.js";

export function getAllUsers(req, res) {
  logger.info("Listando todos os usuários");
  res.json(users);
}

export function createUser(req, res) {
  const { nome } = req.body;

  if (!nome) {
    logger.warn("Usuário sem nome");
    return res.status(400).json({ error: "Nome é obrigatório" });
  }

  const newUser = {
    id: users.length + 1,
    nome,
  };

  users.push(newUser);
  logger.info(`Usuário criado: ${JSON.stringify(newUser)}`);

  res.status(201).json(newUser);
}
