import { Router } from "express";
import { AuthenticateUserController } from "../../../../modules/accounts/UseCases/authenticateUSer/authenticateUserController";
import { RefreshTokenController } from "../../../../modules/accounts/UseCases/refresToken/RefreshTokenController";
import { RefreshTokenUseCase } from "../../../../modules/accounts/UseCases/refresToken/RefreshTokenUseCase";

const authenticateRoutes = Router();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);

export { authenticateRoutes }