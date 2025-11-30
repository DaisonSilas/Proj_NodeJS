import { Router } from "express";


const router = Router();


let users = [
{ id: 1, name: "Ana" },
{ id: 2, name: "Carlos" }
];


router.get("/", (req, res) => {
res.json(users);
});


router.post("/", (req, res) => {
const user = req.body;
user.id = users.length + 1;
users.push(user);
res.status(201).json(user);
});


export default router;