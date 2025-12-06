import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { users } from "../data/users.js";

const SECRET = process.env.JWT_SECRET;

// Registrar usuário
export const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const exists = users.find(u => u.username === username);
  if (exists) {
    return res.status(400).json({ message: "Usuário já existe" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newId = users.length > 0
    ? Math.max(...users.map(u => u.id)) + 1
    : 1;

  const user = { id: newId, username, password: hashedPassword };
  users.push(user);

  res.status(201).json({ message: "Usuário registrado com sucesso" });
};

// Login
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: "Usuário ou senha incorretos" });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: "Usuário ou senha incorretos" });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    SECRET,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login bem-sucedido", token });
};

