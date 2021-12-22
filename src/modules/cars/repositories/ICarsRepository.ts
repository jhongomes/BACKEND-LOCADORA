import { ICreateCarsDTO } from "../dtos/ICreateCarsDTO";
import { Car } from "../infra/entities/Car";

export interface ICarsRepository {
    create(data: ICreateCarsDTO): Promise<Car>
    findByLicensePlate(license_plate: string): Promise<Car>
}