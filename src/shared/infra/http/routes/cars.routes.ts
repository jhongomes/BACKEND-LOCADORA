import { Router } from "express"
import multer from "multer";
import uploadConfig from "../../../../config/upload"
import { CreateCarController } from "../../../../modules/cars/UseCases/createCar/createCarController"
import { CreateCarSpecificationController } from "../../../../modules/cars/UseCases/createCarSpecification/createCarSpecificationController";
import { ListAvailableCarsController } from "../../../../modules/cars/UseCases/listAvailableCars/listAvailableCarsController";
import { ListCarController } from "../../../../modules/cars/UseCases/listCar/listCarController";
import { UploadCarImagesController } from "../../../../modules/cars/UseCases/uploadCarImages/uploadCarImagesController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const carsRoutes = Router()
const createCarController = new CreateCarController();
const createCarSpecificationController = new CreateCarSpecificationController()
const listCarController = new ListCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const uploadCarImagesController = new UploadCarImagesController();

const uploadImages = multer(uploadConfig.upload("./tmp/cars"))

carsRoutes.post("/", ensureAuthenticate, ensureAdmin, createCarController.handle)
carsRoutes.post("/specifications/:id", ensureAuthenticate, ensureAdmin, createCarSpecificationController.handle)
carsRoutes.post("/images/:id", ensureAuthenticate, ensureAdmin, uploadImages.array("images"), uploadCarImagesController.handle)
carsRoutes.get("/", listCarController.handle)
carsRoutes.get("/available", listAvailableCarsController.handle)


export { carsRoutes }