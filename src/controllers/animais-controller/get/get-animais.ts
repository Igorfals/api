import { AnimaisModel } from '../../../models/animais'
import { AnimaisService } from '../../../db/animais-service'
import { ControllerResponse } from '../../../models/controller'

const animaisService = new AnimaisService()

export class GetAnimaisController {
    async getAnimais(request: any): Promise<ControllerResponse> {
        try {
            const animais: AnimaisModel[] = await animaisService.getAnimais(request)
            const animaisTotal: any = await animaisService.getAnimaisTotal(request)
            return {
                statusCode: 200,
                resposta: {
                    animais: animais,
                    total: animaisTotal.total
                }
            }
        } catch (error) {
            console.log(error);

            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no serviço!!'
                }
            }
        }
    }
}