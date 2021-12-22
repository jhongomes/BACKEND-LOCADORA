import { Router } from 'express';
import { CreateSpecificationController } from '../../../../modules/cars/UseCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../../../../modules/cars/UseCases/ListSpecification/ListSpecificationController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';

const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationController()

specificationRoutes.post("/", ensureAuthenticate, ensureAdmin, createSpecificationController.handle);
specificationRoutes.get("/", listSpecificationController.handle)

export { specificationRoutes };
