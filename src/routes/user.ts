// route/user.js
// import { Request, Response, Router } from "express";
// import { createUser, showUser, showUserbyId } from "../controllers/user"; // Import handler functions

import { Router } from "express";

// const router = Router();

// // Define the route for fetching all users
// router.get("/", showUser);

// // Define the route for fetching a user by ID
// router.get("/:id", showUserbyId);
// router.post("/create",createUser);
// router.get('/take',(req:Request,res:Response)=>{
//     return res.status(200).json({abc:"def"})
// })
// export default router;


const router = Router()

router.get("/test",(req,res)=>{
    return res.json({test:"hello"})
})

export default router;
