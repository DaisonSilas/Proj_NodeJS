import { Router } from "express";
import { 
  getProducts, 
  createProduct,
  deleteProduct 
} from "../controllers/productsControllers.js";

const router = Router();

router.get("/", getProducts);          // GET → listar
router.post("/", createProduct);       // POST → criar
router.delete("/:id", deleteProduct);  // DELETE → remover

export default router;
