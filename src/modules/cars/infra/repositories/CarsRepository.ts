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

    async list(): Promise<Car[]> {
        const all = await this.repository.find()
        return all
    }

    async findAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]> {
        const carsQuery = await this.repository
            .createQueryBuilder("c")
            .where("available = :available", { available: true })

        if (brand) {
            carsQuery.andWhere("brand = :brand", { brand })
        }

        if (name) {
            carsQuery.andWhere("name = :name", { name })

        } if (category_id) {
            carsQuery.andWhere("category_id = :category_id", { category_id })
        }

        const cars = await carsQuery.getMany();

        return cars
    }

}

export { CarsRepository }