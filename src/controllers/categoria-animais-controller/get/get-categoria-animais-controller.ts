import { CategoriaAnimaisService } from '../../../db/categoria-animais-service'
import { CategoriaTipoAnimaisModel } from '../../../models/categoria-animais'
import { ControllerResponse } from '../../../models/controller'

const categoriaAnimaisService = new CategoriaAnimaisService()

export class GetCategoriaAnimaisController {
    async getCategoriaAnimais(request: any): Promise<ControllerResponse> {
        try {
            const categoriaAnimais: CategoriaTipoAnimaisModel[] = await categoriaAnimaisService.getCategoriaAnimais(request)
            const categoriaAnimaisTotal: any = await categoriaAnimaisService.getCategoriaAnimaisTotal(request)
            return {
                statusCode: 200,
                resposta: {
                    categoriaAnimais: categoriaAnimais,
                    total: categoriaAnimaisTotal.total
                }
            }
        } catch (error) {
            return {
                statusCode: 500,
                resposta: {
                    mensagem: 'Erro no serviço!!'
                }
            }
        }
    }
}