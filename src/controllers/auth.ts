import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { compareSync, hashSync } from "bcrypt";
import  jwt  from "jsonwebtoken";
import { JWT_SECRET } from "../secret";
import { badRequestException } from "../exceptions/bad-request";
import { errorCode } from "../exceptions/route";

export const login = async (req: Request, res: Response , next:NextFunction):Promise<void> => {
  try {
    const { mail, password } = req.body;

    let user = await prismaClient.user.findFirst({ where: { mail } });
console.log(user);

    if (!user) {
     return next (new badRequestException("User not found" , errorCode.USER_NOT_FOUND));
    }
console.log(password , user.password);

    if (!compareSync(password, user.password)) {
      res.status(404).json({ error: "password incorrect" });
      return;
    }
const{password:_ , ...newUserDetail}= user;
    const token = jwt.sign({
      user: user.mail , name: user.name 
    },JWT_SECRET);



    res.json({newUserDetail , token});
    return;
  } catch (e) {
    res.send(e);
    return;
  }
};

export const signup = async (req: Request, res: Response ,next:NextFunction): Promise<void> => {

    const { name, mail, password } = req.body;
    let user = await prismaClient.user.findFirst({ where: { mail } });
    if (user) {
    return next( new badRequestException('user already exist' , errorCode.USER_ALREADY_EXISTS));
    }

    user = await prismaClient.user.create({
      data: { name, mail, password: hashSync(password, 10) },
    });

    res.json(user);
    return;
};

export const updateUser = async ( req: Request, res: Response , next:NextFunction): Promise<void> => {
  try {
    const mail = req.query.mail as string;
    const updateData = req.body;
    console.log(mail);

    if (!mail) {
      return next (new badRequestException("Mail not found" , errorCode.MAIL_NOT_FOUND));
    }

    const user = await prismaClient.user.findFirst({ where: { mail } });

      if (!user) {
        return next(new badRequestException('User already exists', errorCode.USER_ALREADY_EXISTS));
    }

    const updatedUser = await prismaClient.user.update({
      where: { mail },
      data: updateData,
    });

    res.json({ message: "User updated successfully", user: updatedUser });
    return;
  } catch (error) {
    res.status(500).json({ message: "User update error", error: error });
    return;
  }
};
