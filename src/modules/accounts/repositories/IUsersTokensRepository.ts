import { ICreateUserTokenDTO } from "../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../infra/entities/UserTokens";

interface IUsersTokensRepository {
    create({
        user_id,
        expires_date,
        refresh_token
    }: ICreateUserTokenDTO): Promise<UserTokens>;
    findByUserIdAndRefreshToken(user_id: string, resfresh_token: string): Promise<UserTokens>;
    deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository }