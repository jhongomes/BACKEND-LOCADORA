import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepositoryInMemory implements ISpecificationRepository {
    specification: Specification[] = [];

    async create({
        name,
        description
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = new Specification()

        Object.assign(specification, {
            name,
            description
        })
        this.specification.push(specification);
    }

    async list(): Promise<Specification[]> {
        const all = this.specification
        return all
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.specification.find((specification) => specification === specification)
        return specification
    }
}

export { SpecificationRepositoryInMemory }