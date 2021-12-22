import { Category } from "../../infra/entities/category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoryReposipositoryInMemory implements ICategoriesRepository {
    category: Category[] = []

    async findByName(name: string): Promise<Category> {
        const category = this.category.find((category) => category)
        return category
    }

    async list(): Promise<Category[]> {
        const all = await this.category
        return all
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category()

        Object.assign(category, {
            name,
            description
        })
        this.category.push(category)
    }

}

export { CategoryReposipositoryInMemory }