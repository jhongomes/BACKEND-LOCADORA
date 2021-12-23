import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListCarUseCase } from "./listCarUseCase"

class ListCarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCarUseCase = container.resolve(ListCarUseCase)

        const all = await listCarUseCase.execute()

        return response.json(all)
    }
}

export { ListCarController }