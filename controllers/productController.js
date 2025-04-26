const Product = require('../models/Product');


const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener los productos', message: err.message});
    }
};


const getProductById = async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json({error: 'Producto no encontrado'});
        res.json(product);
    } catch (err) {
        res.status(500).json({error: 'Error al obtener el producto', message: err.message});
    }
};
    

const createProduct = async (req, res) => {
    try{
        const {name, description, price, stock, image} = req.body;
        const newProduct = new Product({name, description, price, stock, image});
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({error: 'Error al crear el producto', message: err.message});
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true, runValidators: true}
        );
        if(!updatedProduct) return res.status(404).json({error: 'Producto no encontrado'});
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({error: 'Error al actualizar el producto', message: err.message});
    }
};


const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if(!deletedProduct) return res.status(404).json({error: 'Producto no encontrado'});
        res.json({message: 'Producto eliminado correctamente'});
    } catch (err) {
        res.status(500).json({error: 'Error al eliminar el producto', message: err.message});
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
