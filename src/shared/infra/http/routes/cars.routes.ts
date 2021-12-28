import { Router } from "express"
import { CreateCarController } from "../../../../modules/cars/UseCases/createCar/createCarController"
import { CreateCarSpecificationController } from "../../../../modules/cars/UseCases/createCarSpecification/createCarSpecificationController";
import { ListAvailableCarsController } from "../../../../modules/cars/UseCases/listAvailableCars/listAvailableCarsController";
import { ListCarController } from "../../../../modules/cars/UseCases/listCar/listCarController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const carsRoutes = Router()
const createCarController = new CreateCarController();
const listCarController = new ListCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController()

carsRoutes.post("/", ensureAuthenticate, ensureAdmin, createCarController.handle)
carsRoutes.post("/specifications/:id", createCarSpecificationController.handle)
carsRoutes.get("/", listCarController.handle)
carsRoutes.get("/available", listAvailableCarsController.handle)


export { carsRoutes }