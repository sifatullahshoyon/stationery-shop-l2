"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/product/product.route");
const order_route_1 = require("./app/modules/order/order.route");
const app = (0, express_1.default)();
// const port = 3000;
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
// products
app.use('/api/v1/products', product_route_1.productRoutes);
// orders
app.use('/api/v1/orders', order_route_1.orderRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
