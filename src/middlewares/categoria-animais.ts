// ------------------------
import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddCategoriaAnimaisController } from '../controllers/categoria-animais-controller/add/add-categoria-animais-controller'
import { UpdateCategoriaAnimaisController } from '../controllers/categoria-animais-controller/update/update-categoria-animais-controller'
// imports

//-------------------------------------
const addcontroller = new AddCategoriaAnimaisController()
const updatecontroller = new UpdateCategoriaAnimaisController()
// Criando estancias da class e armazendo em variaveis
//-------------------------------------------------
export class CategoriaAnimaisMiddleWare {
    async setCategoriaanimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setCategoriaanimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    // DaDOS possiveis req.body que é o corpo
    async updatecategoriaAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await updatecontroller.updateCategoriaAnimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
}