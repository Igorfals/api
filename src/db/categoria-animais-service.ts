import { Knex } from 'knex'
import { CategoriaTipoAnimaisModel } from '../models/categoria-animais'
import { knexconnection as knex } from './knex-connection'


export class CategoriaAnimaisService {
    setCategoriaAnimaisTipo(obj: any): Knex.QueryBuilder {
        return knex('categoria_animais').insert(obj)
    }
    getCategoriaAnimaisTipoID(id: number): Knex.QueryBuilder<CategoriaTipoAnimaisModel> {
        return knex('categoria_animais')
            .select('categoria_animais,*')
            .andWhere('id_categoria', id).first()
    }
}