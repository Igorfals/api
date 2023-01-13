import { Knex } from 'knex'
import { AnimaisModel } from '../models/animais'
import { knexconnection as knex } from './knex-connection'

export class AnimaisService {
    setAnimais(obj: any): Knex.QueryBuilder {
        return knex('animais').insert(obj)
    }
    getAnimais(id: number): Knex.QueryBuilder<AnimaisModel> {
        return knex('animais')
            .select('animais.*')
            .andWhere('id_animal', id).first()
    }
}