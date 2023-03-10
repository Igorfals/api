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
    getCategoriaAnimais(request: any): Knex.QueryBuilder<CategoriaTipoAnimaisModel> {
        return knex('categoria_animais')
            .select('categoria_animais.*', 'tipo_animais.nome_tipo')
            .join('tipo_animais', 'categoria_animais.tipo_animais_id', 'tipo_animais.id_tipo')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('categoria_nome', 'Like', `%${request.pesquisa}%`)
                }
            })
            .andWhere(function () {
                if (request.tipo) {
                    this.where('tipo_animais_id', request.tipo)
                }
            })
            .limit(request.limit).offset(request.offset)
    }
    getCategoriaAnimaisTotal(request: any): Knex.QueryBuilder {
        return knex('categoria_animais').count('id_categoria as total')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('categoria_nome', 'Like', `%${request.pesquisa}%`)
                }
            })
            .andWhere(function () {
                if (request.tipo) {
                    this.where('tipo_animais_id', request.tipo)
                }
            })
            .first()
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