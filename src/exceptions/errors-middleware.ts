import { NextFunction, Request, Response } from "express"
import { httpException } from "./route"

export const  errorMiddleware =(error:httpException , req:Request , res:Response, next:NextFunction) =>{
res.status(error.statusCode).json({
   message: error.message ,errorCode: error.errorCode , error:error.error
})

}