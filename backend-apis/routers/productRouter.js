import * as productController from '../controllers/productController.js'
import express from "express"
import upload from '../middlewares/multerSetup.js'

const productRouter =  express.Router()

productRouter.post("/", upload.single('image'), productController.createProduct )
productRouter.get("/", productController.fetchProducts )
productRouter.get("/:id", productController.fetchProductById)
productRouter.put("/:id", upload.single('image'), productController.updateProduct)
productRouter.delete("/:id",productController.deleteProduct)


export default productRouter
