import { CategoriaAnimaisService } from '../../../db/categoria-animais-service'
import { ControllerResponse } from '../../../models/controller'
import { CategoriaTipoAnimaisModel } from '../../../models/categoria-animais'

const categoriaanimaisService = new CategoriaAnimaisService()

export class UpdateCategoriaAnimaisController {
    async updateCategoriaAnimais(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['id_categoria', 'categoria_nome', 'tipo_animais_id']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 200,
                        resposta: {
                            mensagem: `${field} Não foi fornecido!`
                        }
                    }
                }
            }
            const categoriaAnimaisAdd: CategoriaTipoAnimaisModel = {
                id_categoria: request.id_categoria,
                categoria_nome: request.categoria_nome,
                tipo_animais_id: request.tipo_animais_id
            }
            await categoriaanimaisService.updateCategoriaAnimais(categoriaAnimaisAdd)
            const categoriaAnimaisResponse = await categoriaanimaisService.getCategoriaAnimaisTipoID(request.id_categoria)
            return {
                statusCode: 200,
                resposta: {
                    categoriaanimais: categoriaAnimaisResponse,
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