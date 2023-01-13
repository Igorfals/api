import { ControllerResponse } from '../../../models/controller'
import { AnimaisService } from '../../../db/animais-service'

const animaisService = new AnimaisService()

export class DeleteAnimaisController {
    async deleteAnimais(id: number): Promise<ControllerResponse> {
        try {
            if (isNaN(id)) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Informações invalida!'
                    }
                }
            }
            const item = await animaisService.getAnimaisID(id)
            await animaisService.deleteAnimais(id)
            return {
                statusCode: 200,
                resposta: {
                    mensagem: 'item deletado com sucesso',
                    item
                }
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor!!'
                }
            }
        }
    }
}