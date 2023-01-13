import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddAnimaisController } from '../controllers/animais-controller/add/add-animais-controller'


const addcontroller = new AddAnimaisController()

export class AnimaisMiddleWhere {
    async setAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setAnimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
}