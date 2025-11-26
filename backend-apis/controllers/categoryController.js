import Category from "../models/categoryModel.js"

const createCategory = async (req, res) => {

    try {

        let { name, description } = req.body

        const existedCategory = await Category.findOne({ name })

        if (existedCategory) {
            return res.status(409).json({ success: false, message: `Category ${name} alreay exists` })
        }

        // const category = await Category.create({name: name, description: description})
        const category = await Category.create({ name, description })

        return res.status(201).json({ success: true, category})
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const fetchCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        return res.status(200).json({ success: true, categories })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const fetchCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id

        const category = await Category.findById(categoryId);

        return res.status(200).json({ success: true, category })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id

        const existedCategory = await Category.findOne({ _id: categoryId })

        if (!existedCategory) {
            return res.status(404).json({ success: false, message: `Category doesnot exists` })
        }

        
        const {name, description} = req.body

        await Category.findByIdAndUpdate(categoryId, {name, description});

        const updatedCategory = await Category.findOne({_id: categoryId})


        return res.status(200).json({ success: true, updated_category: updatedCategory, message: `Category updated successfully`})
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const deleteCategory =  async (req, res) => {
    try {
        const categoryId = req.params.id

        const existedCategory = await Category.findOne({ _id: categoryId })

        if (!existedCategory) {
            return res.status(404).json({ success: false, message: `Category doesnot exists` })
        }

        await Category.findByIdAndDelete(categoryId)

        return res.status(200).json({ success: true, message: "Category deleted successfully" })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

export {
    createCategory, fetchCategories, fetchCategoryById, updateCategory, deleteCategory
}