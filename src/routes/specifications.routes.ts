import { request, Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCasses/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/useCasses/ListSpecification/ListSpecificationController';
import { ListSpecificationUseCase } from '../modules/cars/useCasses/ListSpecification/ListSpecificationUseCase';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationController()


specificationRoutes.post("/", createSpecificationController.handle);
specificationRoutes.get("/", listSpecificationController.handle)

export { specificationRoutes};
