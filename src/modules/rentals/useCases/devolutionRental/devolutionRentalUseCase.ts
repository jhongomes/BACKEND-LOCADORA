import { inject, injectable } from "tsyringe";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../../cars/repositories/ICarsRepository";
import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";

interface IRequest {
    id: string;
    user_id: string
}

@injectable()
class DevolutionRentalUseCase {
    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalsRepository,
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
        @inject("DayjsDateProvider")
        private dayjsDateProvider: IDateProvider) { }

    async execute({ id, user_id }: IRequest): Promise<Rental> {
        const rental = await this.rentalsRepository.findById(id)
        const car = await this.carsRepository.findById(rental.car_id)
        const minimum_daily = 1;

        if (!rental) {
            throw new AppError("Rental does not exists")
        }

        const dateNow = this.dayjsDateProvider.dateNow()

        // calculo de diarias 
        let daily = this.dayjsDateProvider.compareInDays(
            rental.start_date,
            this.dayjsDateProvider.dateNow()
        )

        if (daily <= 0) {
            daily = minimum_daily
        }

        //calculando qt de atrasos
        const delay = this.dayjsDateProvider.compareInDays(
            dateNow,
            rental.expected_return_date
        )

        let total = 0
        if (delay > 0) {
            const calcule_fine = delay * car.fine_amount
            total = calcule_fine
        }

        total += daily * car.daily_rate

        rental.end_date = this.dayjsDateProvider.dateNow()
        rental.total = total

        await this.rentalsRepository.create(rental)
        await this.carsRepository.updateAvailable(car.id, true)

        return rental

    }

}

export { DevolutionRentalUseCase }