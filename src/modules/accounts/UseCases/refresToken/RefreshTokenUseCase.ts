import { inject, injectable } from "tsyringe";
import { verify, sign } from "jsonwebtoken"
import { IUsersTokensRepository } from "../../repositories/IUsersTokensRepository";
import auth from "../../../../config/auth";
import { AppError } from "../../../../shared/errors/AppError";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";

interface IPayload {
    sub: string;
    email: string;
}

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("UsersTokensRepository")
        private usersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private dayjsDateProvider: IDateProvider) { }

    async execute(token: string): Promise<string> {
        const { email, sub } = verify(token, auth.secret_refresh_token) as IPayload

        const user_id = sub

        const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(user_id, token)

        if (!userToken) {
            throw new AppError("Refresh token does not exists!")
        }

        await this.usersTokensRepository.deleteById(userToken.id)

        const refresh_token = sign({ email }, auth.secret_refresh_token, {
            subject: sub,
            expiresIn: auth.expires_in_refresh_token
        })

        const expires_date = this.dayjsDateProvider.addDays(auth.expires_resfresh_token_days)

        await this.usersTokensRepository.create({
            expires_date,
            refresh_token,
            user_id
        })

        return refresh_token
    }
}

export { RefreshTokenUseCase }