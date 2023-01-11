import { ControllerResponse } from '../../../models/controller'
import { TipoAnimaisService } from '../../../db/tipo-animais-service'

const tipoanimaisService = new TipoAnimaisService()

export class DeleteTipoAnimaisController {
    async deleteTipoAnimais(id: number): Promise<ControllerResponse> {
        try {
            if (isNaN(id)) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Informação invalida!'
                    }
                }
            }
            const item = await tipoanimaisService.getTipoAnimaisID(id)
            await tipoanimaisService.deleteTipoAnimais(id)
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