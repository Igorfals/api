// ------------------------
import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { GetCategoriaAnimaisController } from '../controllers/categoria-animais-controller/get/get-categoria-animais-controller'
import { AddCategoriaAnimaisController } from '../controllers/categoria-animais-controller/add/add-categoria-animais-controller'
import { UpdateCategoriaAnimaisController } from '../controllers/categoria-animais-controller/update/update-categoria-animais-controller'
import { DeleteCategoriaanimaisController } from '../controllers/categoria-animais-controller/delete/delete-categoria-animais-controller'
// imports

//-------------------------------------
const addcontroller = new AddCategoriaAnimaisController()
const getcontroller = new GetCategoriaAnimaisController()
const updatecontroller = new UpdateCategoriaAnimaisController()
const deletecontroller = new DeleteCategoriaanimaisController()
// Criando estancias da class e armazendo em variaveis
//-------------------------------------------------
export class CategoriaAnimaisMiddleWare {
    async setCategoriaanimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setCategoriaanimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async getCategoriaAnimais(req: Request, res: Response) {
        const dados: ControllerResponse = await getcontroller.getCategoriaAnimais(req.query)
        res.status(dados.statusCode).json(dados.resposta)
    }
    // DaDOS possiveis req.body que é o corpo
    async updatecategoriaAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await updatecontroller.updateCategoriaAnimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    async deletecategoriaAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await deletecontroller.deleteCategoriaAnimais(parseInt(req.params.id))
        res.status(dados.statusCode).json(dados.resposta)
    }
}