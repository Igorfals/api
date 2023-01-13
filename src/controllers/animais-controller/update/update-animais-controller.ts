import { AnimaisModel } from '../../../models/animais'
import { ControllerResponse } from '../../../models/controller'
import { AnimaisService } from '../../../db/animais-service'

const animaisService = new AnimaisService()

export class UpdateAnimaisController {
    async updateAnimais(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id_animal']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi fornecido`
                        }
                    }
                }
            }
            const animaisAdd: AnimaisModel = {
                id_animal: request.id_animal,
                categoria_animais_id: request.categoria_animais_id,
                nome: request.nome,
                nome_cientifico: request.nome_cientifico,
                descricao: request.descricao
            }
            await animaisService.updateAnimais(animaisAdd)
            const animaisResponse = await animaisService.getAnimaisID(request.id_animal)
            return {
                statusCode: 200,
                resposta: {
                    animais: animaisResponse,
                    mensagem: 'Informações atualizadas com sucesso!'
                }
            }
        } catch (error: any) {
            if (error.errno === 1054) {
                return {
                    statusCode: 400,
                    resposta: {
                        mensagem: 'Um ou mais paramentos fornecidos é invalidos!'
                    }
                }
            }
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Error no servidor!!'
                }
            }
        }
    }
}