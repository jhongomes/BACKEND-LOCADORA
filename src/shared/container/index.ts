import { container } from "tsyringe";

import {CategoriesRepository} from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationRepository} from "../../modules/cars/repositories/ISpecificationRepository";

import {ICategoriesRepository} from "../../modules/cars/repositories/ICategoriesRepository";
import { SpecificationRepository} from "../../modules/cars/repositories/implementations/SpecificationRepository";





container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);