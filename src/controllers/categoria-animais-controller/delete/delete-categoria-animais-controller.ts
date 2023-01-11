import { ControllerResponse } from '../../../models/controller'
import { CategoriaAnimaisService } from '../../../db/categoria-animais-service'

const categoriaanimaisService = new CategoriaAnimaisService()

export class DeleteCategoriaanimaisController {
    async deleteCategoriaAnimais(id: number): Promise<ControllerResponse> {
        try {
            if (isNaN(id)) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Informações invalida!!'
                    }
                }
            }
            const item = await categoriaanimaisService.getCategoriaAnimaisTipoID(id)
            await categoriaanimaisService.deleteCategoriaAnimais(id)
            return {
                statusCode: 200,
                resposta: {
                    mensagem: 'item deletado com sucesso!',
                    item
                }
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor!'
                }
            }
        }
    }
}