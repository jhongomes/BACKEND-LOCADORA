import { inject, injectable } from "tsyringe";
import { Car } from "../../infra/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class ListCarUseCase {
    constructor(
        @inject("CarsRepository")
        private readonly carsRepository: ICarsRepository) { }

    async execute(): Promise<Car[]> {
        const all = await this.carsRepository.list()

        return all
    }
}
export { ListCarUseCase }