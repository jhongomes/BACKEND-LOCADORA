import { Router } from "express"
import { CreateCarController } from "../../../../modules/cars/UseCases/createCar/createCarController"
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const carsRoutes = Router()
const createCarController = new CreateCarController();

carsRoutes.post("/", ensureAuthenticate, ensureAdmin, createCarController.handle)

export { carsRoutes }