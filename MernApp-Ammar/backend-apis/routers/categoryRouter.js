import * as categoryController from '../controllers/categoryController.js'
import express from "express"

const categoryRouter =  express.Router()

categoryRouter.post("/", categoryController.createCategory )
categoryRouter.get("/", categoryController.fetchCategories )
categoryRouter.get("/:id", categoryController.fetchCategoryById)
categoryRouter.put("/:id", categoryController.updateCategory)
categoryRouter.delete("/:id",categoryController.deleteCategory)


export default categoryRouter
