import { getRepository, Repository } from "typeorm";
import { Car } from "../entities/Car";
import { ICreateCarsDTO } from "../../dtos/ICreateCarsDTO";
import { ICarsRepository } from "../../repositories/ICarsRepository";

class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>

    constructor() {
        this.repository = getRepository(Car)
    }

    async create({
        id,
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarsDTO): Promise<Car> {
        const car = this.repository.create({
            id,
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        })
        await this.repository.save(car)

        return car
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        const findLicense = await this.repository.findOne({ license_plate })
        return findLicense
    }

}

export { CarsRepository }