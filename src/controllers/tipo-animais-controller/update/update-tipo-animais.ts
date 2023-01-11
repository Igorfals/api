import { TipoAnimaisService } from '../../../db/tipo-animais-service'
import { ControllerResponse } from '../../../models/controller'
import { TipoAnimaisModel } from '../../../models/tipo-animais'

const tipoanimaisService = new TipoAnimaisService()

export class UpdateTipoAnimaisController {
    async updateTipoAnimais(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id_tipo']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} não foi fornecido`
                        }
                    }
                }
            }
            const tipoAnimaisAdd: TipoAnimaisModel = {
                id_tipo: request.id_tipo,
                nome_tipo: request.nome_tipo
            }
            await tipoanimaisService.updateTipoAnimais(tipoAnimaisAdd)
            const tipoAnimaisResponse = await tipoanimaisService.getTipoAnimaisID(request.id_tipo)
            return {
                statusCode: 200,
                resposta: {
                    tipoanimais: tipoAnimaisResponse,
                    mensagem: 'Informações atualizadas com sucesso!'
                }
            }
        } catch (error: any) {
            if (error.errno === 1054) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Um ou mais paramentos fornecidos é invalido!'
                    }
                }
            }
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor!'
                }
            }
        }
    }
}