import { Knex } from 'knex'
import { CategoriaTipoAnimaisModel } from '../models/categoria-animais'
import { knexconnection as knex } from './knex-connection'


export class CategoriaAnimaisService {
    setCategoriaAnimaisTipo(obj: any): Knex.QueryBuilder {
        return knex('categoria_animais').insert(obj)
    }
    getCategoriaAnimaisTipoID(id: number): Knex.QueryBuilder<CategoriaTipoAnimaisModel> {
        return knex('categoria_animais')
            .select('categoria_animais.*')
            .andWhere('id_categoria', id).first()
    }
    updateCategoriaAnimais(obj: any): Knex.QueryBuilder {
        return knex('categoria_animais').update(obj).where('id_categoria', obj.id_categoria)
    }
    deleteCategoriaAnimais(id: number): any {
        try {
            return knex.transaction(async function (trx) {
                await trx('categoria_animais').where('id_categoria', id).del()
            })
        } catch (error) {
            return Error()
        }
    }
}