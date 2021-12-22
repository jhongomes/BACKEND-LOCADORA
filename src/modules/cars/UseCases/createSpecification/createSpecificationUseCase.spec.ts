import { AppError } from "../../../../shared/errors/AppError";
import { SpecificationRepositoryInMemory } from "../../repositories/in-memory/SpecificationRepositoryInMemory";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

let createSpecificationUseCase: CreateSpecificationUseCase
let specificationRepositoriesInMemory: SpecificationRepositoryInMemory

describe("Create Specification", () => {
    beforeEach(() => {
        specificationRepositoriesInMemory = new SpecificationRepositoryInMemory();
        createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepositoriesInMemory)
    })
    it("should be able to create a new Specification", async () => {
        const specification = {
            name: "Specification test",
            description: "Specification teste"
        }
        await createSpecificationUseCase.execute(specification)
        const categoryCreated = await specificationRepositoriesInMemory.findByName(specification.name)

        expect(categoryCreated).toHaveProperty("id")
    })

    it("should not be able to create a new with name exists", async () => {
        expect(async () => {
            const specification = {
                name: "Specification test",
                description: "Specification teste"
            }
            await createSpecificationUseCase.execute(specification)
            await createSpecificationUseCase.execute(specification)
        }).rejects.toBeInstanceOf(AppError)

    })
})