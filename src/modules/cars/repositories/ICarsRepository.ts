import { ensureAdmin } from "../../../shared/infra/http/middlewares/ensureAdmin";
import { ICreateCarsDTO } from "../dtos/ICreateCarsDTO";
import { Car } from "../infra/entities/Car";

export interface ICarsRepository {
    create(data: ICreateCarsDTO): Promise<Car>
    findByLicensePlate(license_plate: string): Promise<Car>
    list(): Promise<Car[]>
    findAvailable(brand?: string, category_id?: string, name?: string): Promise<Car[]>
}