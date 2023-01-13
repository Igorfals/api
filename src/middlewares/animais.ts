import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { GetAnimaisController } from '../controllers/animais-controller/get/get-animais'
import { AddAnimaisController } from '../controllers/animais-controller/add/add-animais-controller'
import { UpdateAnimaisController } from '../controllers/animais-controller/update/update-animais-controller'
import { DeleteAnimaisController } from '../controllers/animais-controller/delete/delete-animais-controller'


const addcontroller = new AddAnimaisController()
const getcontroller = new GetAnimaisController()
const updatecontroler = new UpdateAnimaisController()
const deletecontroller = new DeleteAnimaisController()

export class AnimaisMiddleWhere {
    async setAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setAnimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async getAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await getcontroller.getAnimais(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async updateAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await updatecontroler.updateAnimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async deleteAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await deletecontroller.deleteAnimais(parseInt(req.params.id))
        res.status(dados.statusCode).json(dados.resposta)
    }
}