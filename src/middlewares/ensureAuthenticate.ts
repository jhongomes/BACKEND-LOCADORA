import {Request, Response, NextFunction} from "express";
import { verify} from "jsonwebtoken"
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}
export async function ensureAuthenticate(request:Request, response:Response, next: NextFunction){

    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("token missin", 401);
    }

    const [, token] = authHeader.split(" ")

    try{
        const {sub: user_id } = verify(token, "bdf6660e03046c8aaf84ba38cc72f1a3") as IPayload;

        const usersRepository = new UsersRepository();

        const user = await usersRepository.findById(user_id)

        if(!user){
            throw new AppError("User does not exists!", 401)
        }

        request.user = {
            id: user.id
        }

        next()
    }catch {
        throw new AppError("Invalid token!", 401)
    }
}