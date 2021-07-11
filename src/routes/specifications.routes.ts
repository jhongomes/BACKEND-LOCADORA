import { request, Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCasses/createSpecification/CreateSpecificationController';



const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes};
