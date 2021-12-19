import { container } from "tsyringe";
import {CategoriesRepository} from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationRepository} from "../../modules/cars/repositories/ISpecificationRepository";
import {ICategoriesRepository} from "../../modules/cars/repositories/ICategoriesRepository";
import { SpecificationRepository} from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)