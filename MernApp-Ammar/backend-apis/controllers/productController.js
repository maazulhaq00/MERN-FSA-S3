import Product from "../models/productModel.js"

const createProduct = async (req, res) => {

    try {

        let { name, description, price, image, category } = req.body

        // const category = await Category.create({name: name, description: description})
        const product = await Product.create({ name, description, price, image, category })

        return res.status(201).json({ success: true, product })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const fetchProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        return res.status(200).json({ success: true, products })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const fetchProductById = async (req, res) => {
    try {
        const productId = req.params.id

        const product = await Product.findById(productId).populate('category');

        return res.status(200).json({ success: true, product })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id

        const existedProduct = await Product.findOne({ _id: productId })

        if (!existedProduct) {
            return res.status(404).json({ success: false, message: `Product doesnot exists` })
        }


        let { name, description, price, image, category } = req.body

        await Product.findByIdAndUpdate(productId, { name, description, price, image, category  });

        const updatedProduct = await Product.findOne({ _id: productId })


        return res.status(200).json({ success: true, updated_product: updatedProduct, message: `Product updated successfully` })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id

        const existedProduct = await Product.findOne({ _id: productId })

        if (!existedProduct) {
            return res.status(404).json({ success: false, message: `Product doesnot exists` })
        }

        await Product.findByIdAndDelete(productId)

        return res.status(200).json({ success: true, message: "Product deleted successfully" })
    }
    catch (err) {
        return res.status(500).json({ success: false, message: "Internal Server error", error: err })
    }
}

export {
    createProduct, fetchProducts, fetchProductById, updateProduct, deleteProduct
}