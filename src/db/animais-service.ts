import { Knex } from 'knex'
import { AnimaisModel } from '../models/animais'
import { knexconnection as knex } from './knex-connection'

export class AnimaisService {
    setAnimais(obj: any): Knex.QueryBuilder {
        return knex('animais').insert(obj)
    }
    getAnimaisID(id: number): Knex.QueryBuilder<AnimaisModel> {
        return knex('animais')
            .select('animais.*')
            .andWhere('id_animal', id).first()
    }
    getAnimais(request: any): Knex.QueryBuilder<AnimaisModel> {
        return knex('animais')
            .select('animais.*', 'categoria_animais.categoria_nome', 'tipo_animais.nome_tipo')
            .join('categoria_animais', 'animais.categoria_animais_id', 'categoria_animais.id_categoria')
            .join('tipo_animais', 'categoria_animais.tipo_animais_id', 'tipo_animais.id_tipo')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('nome', 'Like', `%${request.pesquisa}%`)
                        .orWhere('nome_cientifico', 'Like', `%${request.pesquisa}%`)
                }
            })
            .andWhere(function () {
                if (request.categoria) {
                    this.where('categoria_animais_id', request.categoria)
                }
            })
            .andWhere(function () {
                if (request.tipo) {
                    this.where('categoria_animais.tipo_animais_id', request.tipo)
                }
            })
            .limit(request.limit).offset(request.offset)
    }
    getAnimaisTotal(request: any): Knex.QueryBuilder<AnimaisModel> {
        return knex('animais').count('id_animal as total')
            .join('categoria_animais', 'animais.categoria_animais_id', 'categoria_animais.id_categoria')
            .join('tipo_animais', 'categoria_animais.tipo_animais_id', 'tipo_animais.id_tipo')
            .andWhere(function () {
                if (request.pesquisa) {
                    this.where('nome', 'Like', `%${request.pesquisa}%`)
                        .orWhere('nome_cientifico', 'Like', `%${request.pesquisa}%`)
                }
            })
            .andWhere(function () {
                if (request.categoria) {
                    this.where('categoria_animais_id', request.categoria)
                }
            })
            .andWhere(function () {
                if (request.tipo) {
                    this.where('categoria_animais.tipo_animais_id', request.tipo)
                }
            })
            .first()
    }
    updateAnimais(obj: any): Knex.QueryBuilder {
        return knex('animais').update(obj).where('id_animal', obj.id_animal)
    }
}