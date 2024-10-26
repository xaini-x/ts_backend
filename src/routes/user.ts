// route/user.js
import { Router } from "express";
import { createUser, showUser, showUserbyId } from "../controllers/user"; // Import handler functions

const router: Router = Router();

// Define the route for fetching all users
router.get("/", showUser);

// Define the route for fetching a user by ID
router.get("/:id", showUserbyId);
router.post("/create",createUser);
export default router;
