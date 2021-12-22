import { Router } from 'express';
import multer from "multer"
import { CreateCategoryController } from '../../../../modules/cars/UseCases/createCategory/createCategoryController';
import { ListCategoriesController } from "../../../../modules/cars/UseCases/ListCategories/ListCategoriesController";
import { ImportCategoryController } from '../../../../modules/cars/UseCases/importCategory/ImportCategoryController';
import { ensureAuthenticate } from '../middlewares/ensureAuthenticate';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
})

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController()
const listCategoryController = new ListCategoriesController();

categoriesRoutes.post("/", ensureAuthenticate, ensureAdmin, createCategoryController.handle);
categoriesRoutes.get("/", listCategoryController.handle)
categoriesRoutes.post("/import", ensureAuthenticate, ensureAdmin, upload.single("file"), importCategoryController.handle)

export { categoriesRoutes };


