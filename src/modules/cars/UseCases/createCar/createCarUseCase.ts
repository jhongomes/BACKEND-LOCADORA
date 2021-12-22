import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateCarsDTO } from "../../dtos/ICreateCarsDTO";
import { Car } from "../../infra/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

@injectable()
class CreateCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository) { }

    async execute({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarsDTO): Promise<Car> {
        const linceseAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate);

        if (linceseAlreadyExists) {
            throw new AppError("Car already exists")
        }

        const car = await this.carsRepository.create({
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        })

        return car;
    }
}

export { CreateCarUseCase }