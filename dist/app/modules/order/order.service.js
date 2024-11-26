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
exports.OrderService = void 0;
const product_model_1 = require("../product/product.model");
const order_model_1 = __importDefault(require("./order.model"));
class OrderService {
    static createOrder(orderData) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_model_1.ProductModel.findById(orderData.product);
            if (!product) {
                throw new Error('Product not found');
            }
            if (product.quantity < orderData.quantity) {
                throw new Error('Insufficient stock');
            }
            // Calculate total price
            const totalPrice = orderData.quantity * product.price;
            // Update product inventory
            product.quantity -= orderData.quantity;
            product.inStock = product.quantity > 0;
            yield product.save();
            // Create order with totalPrice dynamically calculated
            const order = new order_model_1.default(Object.assign(Object.assign({}, orderData), { totalPrice }));
            return order.save();
        });
    }
    static calculateRevenue() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const orders = yield order_model_1.default.aggregate([
                {
                    $lookup: {
                        from: 'products',
                        localField: 'product',
                        foreignField: '_id',
                        as: 'productDetails',
                    },
                },
                { $unwind: '$productDetails' },
                {
                    $group: {
                        _id: null,
                        totalRevenue: {
                            $sum: { $multiply: ['$quantity', '$productDetails.price'] },
                        },
                    },
                },
            ]);
            // console.log('Aggregation result:', orders); // Log the aggregation result for debugging
            return ((_a = orders[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
        });
    }
}
exports.OrderService = OrderService;
