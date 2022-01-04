import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"
import { AppError } from "../../../errors/AppError";
import { UsersRepository } from "../../../../modules/accounts/infra/repositories/UsersRepository";
import { UsersTokensRepository } from "../../../../modules/accounts/infra/repositories/UsersTokensRepository";
import auth from "../../../../config/auth";

interface IPayload {
    sub: string;
}
export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    const userTokensRepository = new UsersTokensRepository()

    if (!authHeader) {
        throw new AppError("token missin", 401);
    }

    const [, token] = authHeader.split(" ")

    try {
        const { sub: user_id } = verify(token, auth.secret_refresh_token) as IPayload;

 
        const user = await userTokensRepository.findByUserIdAndRefreshToken(user_id, token)

        if (!user) {
            throw new AppError("User does not exists!", 401)
        }

        request.user = {
            id: user.id
        }

        next()
    } catch {
        throw new AppError("Invalid token!", 401)
    }
}