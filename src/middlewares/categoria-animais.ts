// ------------------------
import { ControllerResponse } from '../models/controller'
import { Request, Response } from 'express'
import { AddCategoriaAnimaisController } from '../controllers/categoria-animais-controller/add/add-categoria-animais-controller'
// imports

//-------------------------------------
const addcontroller = new AddCategoriaAnimaisController()
// Criando estancias da class e armazendo em variaveis
//-------------------------------------------------
export class CategoriaAnimaisMiddleWare {
    async setCategoriaanimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setCategoriaanimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
    }
    // DaDOS possiveis req.body que é o corpo
}