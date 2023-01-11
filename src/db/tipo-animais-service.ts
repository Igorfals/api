import { Knex } from 'knex'
import { TipoAnimaisModel } from '../models/tipo-animais'
import { knexconnection as knex } from './knex-connection'

export class TipoAnimaisService {
    setTipoAnimais(obj: any): Knex.QueryBuilder {
        return knex('tipo_animais').insert(obj)
    }
    getTipoAnimaisID(id: number): Knex.QueryBuilder<TipoAnimaisModel> {
        return knex('tipo_animais')
            .select('tipo_animais.*')
            .andWhere('id_tipo', id).first()
    }
    updateTipoAnimais(obj: any): Knex.QueryBuilder {
        return knex('tipo_animais').update(obj).where('id_tipo', obj.id_tipo)
    }
    deleteTipoAnimais(id: number): any {
        try {
            return knex.transaction(async function (trx) {
                await trx('tipo_animais').where('id_tipo', id).del()
            })
        } catch (error) {
            return Error()
        }
    }
}
