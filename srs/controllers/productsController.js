import { products } from "../data/products.js";
import { logger } from "../config/logger.js";

export function getAllProducts(req, res) {
  logger.info("Listando todos os produtos");
  res.json(products);
}

export function getProductById(req, res) {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    logger.warn(`Produto não encontrado: ID ${id}`);
    return res.status(404).json({ error: "Produto não encontrado" });
  }

  res.json(product);
}

export function createProduct(req, res) {
  const { nome } = req.body;

  if (!nome) {
    logger.warn("Produto sem nome");
    return res.status(400).json({ error: "Nome do produto é obrigatório" });
  }

  const newProduct = {
    id: products.length + 1,
    nome,
  };

  products.push(newProduct);
  logger.info(`Produto criado: ${JSON.stringify(newProduct)}`);

  res.status(201).json(newProduct);
}

export function updateProduct(req, res) {
  const id = Number(req.params.id);
  const { nome } = req.body;

  const product = products.find((p) => p.id === id);
  if (!product) {
    logger.warn(`Tentativa de atualizar produto inexistente: ID ${id}`);
    return res.status(404).json({ error: "Produto não encontrado" });
  }

  product.nome = nome ?? product.nome;

  logger.info(`Produto atualizado: ${JSON.stringify(product)}`);
  res.json(product);
}

export function deleteProduct(req, res) {
  const id = Number(req.params.id);
  const index = products.findIndex((p) => p.id === id);

  if (index === -1) {
    logger.warn(`Tentativa de excluir produto inexistente: ID ${id}`);
    return res.status(404).json({ error: "Produto não encontrado" });
  }

  const deleted = products.splice(index, 1);

  logger.info(`Produto deletado: ${JSON.stringify(deleted[0])}`);
  res.json({ message: "Produto removido" });
}
