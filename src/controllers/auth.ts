import { Request, Response } from "express";
import { prismaClient } from "..";
import { compareSync, hashSync } from "bcrypt";

export const login = async (req: Request, res: Response) => {
    try {
        const {  mail, password } = req.body;
    
    
        let user = await prismaClient.user.findFirst({ where: { mail } });
        
        if (!user) {
        throw  Error("User not exists");
        }
    
    if(!compareSync(password,user.password)){
        throw  Error("User password wrong");
    }

   const {password:_,...userWithoutPassword} = user;
    res.json(userWithoutPassword);
        } catch (e) {
            res.send(e);
    }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, mail, password } = req.body;


    let user = await prismaClient.user.findFirst({ where: { mail } });
    
    if (user) {
      throw  Error("User already exists");
    }

    user = await prismaClient.user.create({
      data: { name, mail, password: hashSync(password, 10) },
    });

 

    res.json(user);
  } catch (e) {
    res.send(e);
  }
};

export const updateUser = async(req:Request , res: Response) => {
    const {mail} = req.query;
    let user = await prismaClient.user.findFirst({where:{mail}})
    if (user){
        throw  Error("user not found ");
    }



}