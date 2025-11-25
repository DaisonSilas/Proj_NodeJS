export function getUsers(req, res) {
  res.json([
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bob" }
  ]);
}
