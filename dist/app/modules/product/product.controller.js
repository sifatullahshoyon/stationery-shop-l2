"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
// create product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        // creating a schema validation using zod
        const zodParserData = product_validation_1.productValidationSchema.parse(product);
        // call product service function send the data
        const result = yield product_service_1.productService.createProductIntoDB(zodParserData);
        res.status(200).json({
            message: 'Product created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res
            .status(400)
            .json({ message: 'Error creating product', success: false, error });
    }
});
// find all products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productService.getAllProductFromDb();
        res.status(200).json({
            message: 'Products retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res
            .status(400)
            .json({ message: 'Error fetching products', success: false, error });
    }
});
// find single product by id
const getSingleProductFromDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productService.getSingleProductFromDb(productId);
        res.status(200).json({
            message: 'Product retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res
            .status(400)
            .json({ message: 'Error fetching products', success: false, error });
    }
});
// Update product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedData = req.body;
        // Call service to update the product
        const result = yield product_service_1.productService.updateProductInDb(productId, updatedData);
        res.status(200).json({
            message: 'Product updated successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: 'Error updating product',
            success: false,
            error,
        });
    }
});
// Delete product
const deleteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        // Call service to delete the product
        const result = yield product_service_1.productService.deleteProductFromDb(productId);
        res.status(200).json({
            message: 'Product deleted successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: 'Error deleting product',
            success: false,
            error,
        });
    }
});
exports.productControllers = {
    createProduct,
    getAllProducts,
    getSingleProductFromDb,
    deleteSingleProduct,
    updateProduct,
};
