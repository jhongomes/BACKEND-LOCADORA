import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../../../../modules/accounts/UseCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../../../../modules/accounts/UseCases/UpdateAvatar/UpdateAvatarController";
import uploadConfig from "../../../../config/upload"
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle)
usersRoutes.use(ensureAuthenticate)
usersRoutes.patch("/avatar", ensureAuthenticate, uploadAvatar.single("avatar"), updateUserAvatarController.handle)

export { usersRoutes }