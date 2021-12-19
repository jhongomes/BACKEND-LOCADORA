
import { SpecificationRepositoryInMemory } from "../../repositories/in-memory/SpecificationRepositoryInMemory";
import { CreateSpecificationUseCase } from "../createSpecification/CreateSpecificationUseCase";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

let createSpecificationUseCase: CreateSpecificationUseCase
let specificationRepositoriesInMemory: SpecificationRepositoryInMemory
let listSpecificationUseCase: ListSpecificationUseCase

describe("List all Specification", () => {
    beforeEach(() => {
        specificationRepositoriesInMemory = new SpecificationRepositoryInMemory();
        createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepositoriesInMemory)
        listSpecificationUseCase = new ListSpecificationUseCase(specificationRepositoriesInMemory)
    })
    it("Should be able to list all specification", async () => {
        const specification = {
            name: "Specification test",
            description: "Specification teste"
        }
        await createSpecificationUseCase.execute(specification)
        const all = await listSpecificationUseCase.execute()

        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    })
})