import { inject, injectable } from "tsyringe";
import { ICarsImagesRepository } from "../../repositories/ICarsImageRepository";

interface IRequest {
    car_id: string;
    images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
    constructor(
        @inject("CarsImageRepository")
        private carsImageRepository: ICarsImagesRepository) { }

    async execute({ car_id, images_name }: IRequest): Promise<void> {
        images_name.map(async (image) => {
            await this.carsImageRepository.create(car_id, image)
        })
    }
}

export { UploadCarImagesUseCase }