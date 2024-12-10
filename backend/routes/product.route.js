import express from "express";

const routes = express.Router();

import { createProduct, getProducts, updateProduct , deleteProduct } from "../controllers/product.controller.js";
routes.get("/" , getProducts);
routes.post('/' ,createProduct);

 routes.put("/:id",updateProduct);
 routes.delete('/:id' , deleteProduct);
 export default routes