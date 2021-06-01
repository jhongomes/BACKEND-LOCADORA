import  { Router } from 'express';
import multer from "multer"
import { CreateCategoryUseCase } from '../modules/cars/useCasses/createCategory/CreateCategoryUseCase';


import { CategoriesRepository} from '../modules/cars/repositories/implementations/CategoriesRepository';


import { createCategoryController } from '../modules/cars/useCasses/createCategory';

import { listCategoriesController } from "../modules/cars/useCasses/ListCategories";


const categoriesRoutes  = Router();

const upload = multer({
    dest: "./tmp"
})



categoriesRoutes.post("/", (request, response) => {
     return createCategoryController.handle(request, response)
});

categoriesRoutes.get("/", (request, response)=> {
  return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    const { file } = request;
    console.log(file);

    return response.send()
})

export { categoriesRoutes };


