import  { Router } from 'express';
import multer from "multer"
import { CreateCategoryUseCase } from '../modules/cars/useCasses/createCategory/CreateCategoryUseCase';


import { CategoriesRepository} from '../modules/cars/repositories/implementations/CategoriesRepository';

import { CreateCategoryController } from '../modules/cars/useCasses/createCategory/createCategoryController';

import { ListCategoriesController } from "../modules/cars/useCasses/ListCategories/ListCategoriesController";
import { ImportCategoryController } from '../modules/cars/useCasses/importCategory/ImportCategoryController';


const categoriesRoutes  = Router();


const upload = multer({
    dest: "./tmp"
})

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController()
const listCategoryController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle)

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle)

export { categoriesRoutes };


