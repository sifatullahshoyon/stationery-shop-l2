"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// call the controller function
// post route
router.post('/create-product', product_controller_1.productControllers.createProduct);
// get all products routes
router.get('/', product_controller_1.productControllers.getAllProducts);
// get single product routes
router.get('/:productId', product_controller_1.productControllers.getSingleProductFromDb);
// UPDATE product
router.put('/:productId', product_controller_1.productControllers.updateProduct);
// DELETE product
router.delete('/:productId', product_controller_1.productControllers.deleteSingleProduct);
exports.productRoutes = router;
