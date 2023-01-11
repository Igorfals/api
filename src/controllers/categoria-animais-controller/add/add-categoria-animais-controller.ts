import { ControllerResponse } from '../../../models/controller'
import { CategoriaTipoAnimaisModel } from '../../../models/categoria-animais'
import { CategoriaAnimaisService } from '../../../db/categoria-animais-service'



const categoriaAnimaisService = new CategoriaAnimaisService()

export class AddCategoriaAnimaisController {
    async setCategoriaanimais(request: any): Promise<ControllerResponse> {
        try {
            const requredFields = ['categoria_nome', 'tipo_animais_id']
            for (const field of requredFields) {
                if (!request[field]) {
                    return {
                        statusCode: 400,
                        resposta: {
                            mensagem: `${field} Não foi Fornecido!`
                        }
                    }
                }
            }
            const categoriaAnimaisAdd: CategoriaTipoAnimaisModel = {
                tipo_animais_id: request.tipo_animais_id,
                categoria_nome: request.categoria_nome
            }

            const categoriaanimais = await categoriaAnimaisService.setCategoriaAnimaisTipo(categoriaAnimaisAdd)
            const categoriaAnimaisResponse: CategoriaTipoAnimaisModel = await categoriaAnimaisService.getCategoriaAnimaisTipoID(categoriaanimais)
            // pegando o tipo gerado, trás do id
            return {
                statusCode: 200,
                resposta: {
                    categoriaanimais: categoriaAnimaisResponse
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