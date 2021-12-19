import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase"

class ListSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSpeficationUseCase = container.resolve(ListSpecificationUseCase)

        const all = await listSpeficationUseCase.execute()

        return response.json(all);
    }
}

export { ListSpecificationController }