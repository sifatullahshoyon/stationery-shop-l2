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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRevenue = exports.createOrder = void 0;
const order_validation_1 = require("./order.validation");
const order_service_1 = require("./order.service");
const mongoose_1 = __importDefault(require("mongoose"));
// Create Order Controller
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate input data using Zod
        const order = req.body;
        const validatedData = order_validation_1.orderValidationSchema.parse(order);
        // Convert the product string ID to mongoose.ObjectId
        const productId = new mongoose_1.default.Types.ObjectId(validatedData.product);
        // Create the order with the ObjectId
        const result = yield order_service_1.OrderService.createOrder(Object.assign(Object.assign({}, validatedData), { product: productId }));
        res.status(201).json({
            message: 'Order created successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error || 'Error creating order',
            status: false,
        });
    }
});
exports.createOrder = createOrder;
// Calculate Revenue Controller
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.OrderService.calculateRevenue();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: { totalRevenue },
        });
    }
    catch (error) {
        res.status(500).json({
            message: error || 'Error calculating revenue',
            status: false,
        });
    }
});
exports.calculateRevenue = calculateRevenue;
