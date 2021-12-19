import { CategoryReposipositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

let createCategoryUseCase: CreateCategoryUseCase
let categoryRepositoryInMemory: CategoryReposipositoryInMemory
let listCategoriesUseCase: ListCategoriesUseCase

describe("List all categories", () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryReposipositoryInMemory()
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory)
        listCategoriesUseCase = new ListCategoriesUseCase(categoryRepositoryInMemory)
    })

    it("Should be able to list all categories", async () => {
        const category = {
            name: "Category test",
            description: "ctaegory teste"
        }
        await createCategoryUseCase.execute(category)

        const all = await listCategoriesUseCase.execute()
        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })
})