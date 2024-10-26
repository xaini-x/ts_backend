"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.js
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./route/user")); // Import the router
const app = (0, express_1.default)();
const port = 8000;
// Middleware for parsing JSON
app.use(express_1.default.json());
// Middleware to log requests (for debugging)
app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});
// Use the router with the "/api/user" prefix
app.use("/api/user", user_1.default);
app.listen(port, () => {
    console.log(`Running on http://127.0.0.1:${port}`);
});
