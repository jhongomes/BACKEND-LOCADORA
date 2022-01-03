import { Router } from "express"
import { CreateRentalController } from "../../../../modules/rentals/useCases/createRental/createRentalController"
import { DevolutionRentalController } from "../../../../modules/rentals/useCases/devolutionRental/devolutionRentalController"
import { ListRentalsByUserController } from "../../../../modules/rentals/useCases/listRentalByUser/listRentalByUserController"
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate"

const rentalRoutes = Router()
const createRentalController = new CreateRentalController()
const devolutionRentalController = new DevolutionRentalController()
const listRentalsByUserController = new ListRentalsByUserController()

rentalRoutes.post("/", ensureAuthenticate, createRentalController.handle)
rentalRoutes.post("/devolution/:id", ensureAuthenticate, devolutionRentalController.handle)
rentalRoutes.get("/user", ensureAuthenticate, listRentalsByUserController.handle)

export { rentalRoutes }