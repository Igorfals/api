import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { GetAnimaisController } from '../controllers/animais-controller/get/get-animais'
import { AddAnimaisController } from '../controllers/animais-controller/add/add-animais-controller'


const addcontroller = new AddAnimaisController()
const getcontroller = new GetAnimaisController()

export class AnimaisMiddleWhere {
    async setAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setAnimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async getAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getcontroller.getAnimais(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }
}