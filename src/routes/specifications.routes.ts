import { request, Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/UseCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/UseCases/ListSpecification/ListSpecificationController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationController()


specificationRoutes.post("/", createSpecificationController.handle);
specificationRoutes.get("/", listSpecificationController.handle)

export { specificationRoutes};
