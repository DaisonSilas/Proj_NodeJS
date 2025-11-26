let products = [
  { id: 1, nome: "Mouse Gamer" },
  { id: 2, nome: "Teclado Mecânico" },
  { id: 3, nome: "Monitor 144Hz" }
];

// GET - listar produtos
export function getProducts(req, res) {
  return res.json(products);
}

// POST - adicionar produto
export function createProduct(req, res) {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ error: "Nome do produto obrigatório" });
  }

  const newProduct = {
    id: products.length + 1,
    nome
  };

  products.push(newProduct);

  return res.status(201).json(newProduct);
}

// DELETE - remover produto por ID
export function deleteProduct(req, res) {
  const { id } = req.params;

  const index = products.findIndex(p => p.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }

  const deleted = products.splice(index, 1);

  return res.json({ message: "Produto removido", produto: deleted[0] });
}
//PUT - atualizar produto por ID
export function updateProduct(req, res) {
  const { id } = req.params;
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ error: "Nome do produto obrigatório" });
  }

  // encontrar produto
  const product = products.find(p => p.id == id);

  if (!product) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }

  // atualizar
  product.nome = nome;

  return res.json({ message: "Produto atualizado", produto: product });
}


