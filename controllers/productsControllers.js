export function getProducts(req, res) {
  return res.json([
    { id: 1, nome: "Mouse Gamer" },
    { id: 2, nome: "Teclado Mecânico" },
    { id: 3, nome: "Monitor 144Hz" }
  ]);
}
