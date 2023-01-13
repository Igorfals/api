import { ControllerResponse } from '../../../models/controller'
import { AnimaisModel } from '../../../models/animais'
import { AnimaisService } from '../../../db/animais-service'

const animaisService = new AnimaisService()

export class AddAnimaisController {
    async setAnimais(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['nome', 'nome_cientifico', 'categoria_animais_id']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi fornecido!`
                        }
                    }
                }
            }
            const animaisAdd: AnimaisModel = {
                nome: request.nome,
                nome_cientifico: request.nome_cientifico,
                categoria_animais_id: request.categoria_animais_id,
                descricao: request.descricao
            }
            const animais = await animaisService.setAnimais(animaisAdd)
            const animaisResponse: AnimaisModel = await animaisService.getAnimaisID(animais)
            return {
                statusCode: 200,
                resposta: {
                    animais: animaisResponse
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