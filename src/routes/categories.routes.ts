import  { Router } from 'express';
import { CreateCategoryUseCase } from '../modules/cars/useCasses/createCategory/CreateCategoryUseCase';


import { CategoriesRepository} from '../modules/cars/repositories/implementations/CategoriesRepository';


import { createCategoryController } from '../modules/cars/useCasses/createCategory';

import { listCategoriesController } from "../modules/cars/useCasses/ListCategories";


const categoriesRoutes  = Router();



categoriesRoutes.post("/", (request, response) => {
     return createCategoryController.handle(request, response)
});

categoriesRoutes.get("/", (request, response)=> {
  return listCategoriesController.handle(request, response)
})

export { categoriesRoutes };


