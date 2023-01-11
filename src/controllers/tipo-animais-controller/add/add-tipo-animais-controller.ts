import { ControllerResponse } from '../../../models/controller'
import { TipoAnimaisModel } from '../../../models/tipo-animais'
import { TipoAnimaisService } from '../../../db/tipo-animais-service'

const tipoAnimaisService = new TipoAnimaisService()

export class AddTipoAnimaisController {
    async setTipoAnimais(request: any): Promise<ControllerResponse> {
        try {
            // ------------------------------------------
            const requredFields = ['nome_tipo']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} não foi fornecido`
                        }
                    }
                }
                // For, verificando campo por campo
            }
            const tipoAnimaisAdd: TipoAnimaisModel = {
                nome_tipo: request.nome_tipo
            }
            // --------------------------------------------------------------------------------
            const tipoanimais = await tipoAnimaisService.setTipoAnimais(tipoAnimaisAdd)
            // chamando o servico para fazer insert no banco de dados
            //---------------------------------------------------------------------------------------------------
            const tipoAnimaisResponse: TipoAnimaisModel = await tipoAnimaisService.getTipoAnimaisID(tipoanimais)
            // pegando o tipo gerado, atrás do id da linha 24
            return {
                statusCode: 200,
                resposta: {
                    tipoanimais: tipoAnimaisResponse
                }
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no servidor'
                }
            }
        }
    }
}