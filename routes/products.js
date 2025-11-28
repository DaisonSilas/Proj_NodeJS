import { Router } from "express";
import { 
  getProducts, 
  createProduct,
  deleteProduct,
  updateProduct
} from "../controllers/productsControllers.js";

const router = Router();

router.get("/", getProducts);          // listar
router.post("/", createProduct);       // criar
router.put("/:id", updateProduct);     // atualizar
router.delete("/:id", deleteProduct);  // remover


export default router;