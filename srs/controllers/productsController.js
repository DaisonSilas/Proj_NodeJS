import { products } from "../data/products.js";

export const getAllProducts = (req, res) => {
  res.json(products);
};

export const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  res.json(product);
};

export const createProduct = (req, res) => {
  const { nome } = req.body;

  const newId = products.length > 0
    ? Math.max(...products.map(p => p.id)) + 1
    : 1;

  const newProduct = { id: newId, nome };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

export const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { nome } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  product.nome = nome;

  res.json(product);
};

export const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Produto não encontrado" });
  }

  products.splice(index, 1);

  res.status(204).send();
};


