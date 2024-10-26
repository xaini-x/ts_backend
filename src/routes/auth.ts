import { Express, Router } from "express";
import { login, signup } from "../controllers/auth";

const authRoute = Router()

authRoute.get("/login" ,login );
authRoute.post("/signup" ,signup );

export default authRoute;