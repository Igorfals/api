// ----------------------
import { ControllerResponse } from '../models/controller'
import { AddTipoAnimaisController } from '../controllers/tipo-animais-controller/add/add-tipo-animais-controller'
import { Response, Request } from 'express'
import { UpdateTipoAnimaisController } from '../controllers/tipo-animais-controller/update/update-tipo-animais'
import { DeleteTipoAnimaisController } from '../controllers/tipo-animais-controller/delete/delete-tipo-animais'
// importes
// -------------------------------------------------------
const addcontroller = new AddTipoAnimaisController()
const updatecontroller = new UpdateTipoAnimaisController()
const deletecontroller = new DeleteTipoAnimaisController()
// criando estancias da class e armazendo em variaveis
// ----------------------------------------------------------
export class TipoAnimaisMiddleWare {
    // -----------------------------------------------------------
    async setTipoAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await addcontroller.setTipoAnimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
        // dados possiveis req.body que é o corpo
    }
    // ---------------------------------------------
    async updatetipoAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await updatecontroller.updateTipoAnimais(req.body)
        res.status(dados.statusCode).json(dados.resposta)
        // dados possiveis req.body que é o corpo
    }
    // -----------------------------------------------------
    async deleteTipoAnimais(req: Request, res: Response): Promise<void> {
        const dados: ControllerResponse = await deletecontroller.deleteTipoAnimais(parseInt(req.params.id))
        res.status(dados.statusCode).json(dados.resposta)
        // dados obrigatrios pela url, que são req.params
    }
    // middleware é responsavel por organizar os dados enviados pelo usuarios, para que o nosso controlador possa fazer seu papel
}