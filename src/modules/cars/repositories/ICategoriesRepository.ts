import { Category} from "../entities/category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}


interface ICategoriesRepository {
    findByName(name): Category;
    list(): Category[];
    create({ name, description}: ICreateCategoryDTO): void;
}


export { ICategoriesRepository, ICreateCategoryDTO };

