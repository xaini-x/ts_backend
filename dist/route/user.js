"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// route/user.js
const express_1 = require("express");
const user_1 = require("../handlers/user"); // Import handler functions
const router = (0, express_1.Router)();
// Define the route for fetching all users
router.get("/", user_1.showUser);
// Define the route for fetching a user by ID
router.get("/:id", user_1.showUserbyId);
exports.default = router;
