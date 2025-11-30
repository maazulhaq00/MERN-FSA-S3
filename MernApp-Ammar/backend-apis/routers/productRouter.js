import * as productController from '../controllers/productController.js'
import express from "express"

const productRouter =  express.Router()

productRouter.post("/", productController.createProduct )
productRouter.get("/", productController.fetchProducts )
productRouter.get("/:id", productController.fetchProductById)
productRouter.put("/:id", productController.updateProduct)
productRouter.delete("/:id",productController.deleteProduct)


export default productRouter
