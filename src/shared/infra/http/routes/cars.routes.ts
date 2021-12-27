import { Router } from "express"
import { CreateCarController } from "../../../../modules/cars/UseCases/createCar/createCarController"
import { ListAvailableCarsController } from "../../../../modules/cars/UseCases/listAvailableCars/listAvailableCarsController";
import { ListCarController } from "../../../../modules/cars/UseCases/listCar/listCarController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const carsRoutes = Router()
const createCarController = new CreateCarController();
const listCarController = new ListCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post("/", ensureAuthenticate, ensureAdmin, createCarController.handle)
carsRoutes.get("/", listCarController.handle)
carsRoutes.get("/available", listAvailableCarsController.handle)


export { carsRoutes }