import { TipoAnimaisModel } from '../../../models/tipo-animais'
import { TipoAnimaisService } from '../../../db/tipo-animais-service'
import { ControllerResponse } from '../../../models/controller'

const tipoAnimaisService = new TipoAnimaisService()

export class GetTipoAnimaisController {
    async getTipoAnimais(request: any): Promise<ControllerResponse> {
        try {
            const tipoAnimais: TipoAnimaisModel[] = await tipoAnimaisService.getTipoAnimais(request)
            const tipoAnimaisTotal: any = await tipoAnimaisService.getTipoAnimaisTotal(request)
            return {
                statusCode: 200,
                resposta: {
                    tipoAnimais: tipoAnimais,
                    total: tipoAnimaisTotal.total
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