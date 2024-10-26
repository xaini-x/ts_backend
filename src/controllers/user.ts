// handlers/user.js
import { request, Request, response, Response } from "express";
import { createUserDetail } from "../dtos/createUser";
import { CreateUserQueryParams } from "../dtos/types/userType";
import { User } from "../dtos/types/response";

// Handler to return a generic message
export const showUser = async (request: Request, response: Response) => {
  response.send({ msg: "checking data" });
};

// Handler to return a user by ID
export const showUserbyId = async (request: Request, response: Response) => {
  const id = request.params.id;
  response.send({ userId: id });
};

export const createUser = async (request:Request<{id:String},{},createUserDetail,CreateUserQueryParams> , response:Response<User>)=> {
const {userName , mail , phone} = request.body;
request.query.loginAfterCreate;
request.params.id;
response.status(201).send({
  id:"check" , userName: userName , mail:mail , phone:phone
});
}
