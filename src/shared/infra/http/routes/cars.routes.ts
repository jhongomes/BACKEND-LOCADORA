import { Router } from "express"
import { CreateCarController } from "../../../../modules/cars/UseCases/createCar/createCarController"
import { ListCarController } from "../../../../modules/cars/UseCases/listCar/listCarController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const carsRoutes = Router()
const createCarController = new CreateCarController();
const listCarController = new ListCarController();

carsRoutes.post("/", ensureAuthenticate, ensureAdmin, createCarController.handle)
carsRoutes.get("/", listCarController.handle)

export { carsRoutes }