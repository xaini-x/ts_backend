import { Express, Router } from "express";
import { login, signup, updateUser } from "../controllers/auth";

const authRoute = Router()

authRoute.get("/login" ,login );
authRoute.post("/signup" ,signup );
authRoute.put("/update" ,updateUser );

export default authRoute;