import { Router } from "express"
import { CreateRentalController } from "../../../../modules/rentals/useCases/createRental/createRentalController"
import { DevolutionRentalController } from "../../../../modules/rentals/useCases/devolutionRental/devolutionRentalController"
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate"

const rentalRoutes = Router()
const createRentalController = new CreateRentalController()
const devolutionRentalController = new DevolutionRentalController()

rentalRoutes.post("/", ensureAuthenticate, createRentalController.handle)
rentalRoutes.post("/devolution/:id", ensureAuthenticate, devolutionRentalController.handle)
export { rentalRoutes }