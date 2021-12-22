import { AppError } from "../../../../shared/errors/AppError";
import { CategoryReposipositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase
let categoryRepositoryInMemory: CategoryReposipositoryInMemory;

describe("Create category", () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryReposipositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory)
    })

    it("should be able to create a new category", async () => {
        const category = {
            name: "Category test",
            description: "ctaegory teste"
        }
        await createCategoryUseCase.execute(category)
        const categoryCreated = await categoryRepositoryInMemory.findByName(category.name)

        expect(categoryCreated).toHaveProperty("id")
    })

    it("should not be able to create a new with name exists", async () => {
        expect(async () => {
            const category = {
                name: "Category test",
                description: "ctaegory teste"
            }
            await createCategoryUseCase.execute(category)
            await createCategoryUseCase.execute(category)
        }).rejects.toBeInstanceOf(AppError)

    })
})