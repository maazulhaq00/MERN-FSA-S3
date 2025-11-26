import * as categoryController from '../controllers/categoryController.js'
import express from "express"
import isAuthenticated from '../middlewares/userAuth.js'
import isAdminAuthenticated from '../middlewares/adminAuth.js'

const categoryRouter =  express.Router()

categoryRouter.post("/", isAdminAuthenticated, categoryController.createCategory )

categoryRouter.get("/", categoryController.fetchCategories )
categoryRouter.get("/:id", categoryController.fetchCategoryById)
categoryRouter.put("/:id", categoryController.updateCategory)
categoryRouter.delete("/:id",categoryController.deleteCategory)


export default categoryRouter
