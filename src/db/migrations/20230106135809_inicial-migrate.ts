import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return await knex.schema
        .createTable('tipo_animais', function (table) {
            table.increments('id_tipo').primary()
            table.string('nome_tipo', 20).notNullable()
        })
        .createTable('categoria_animais', function (table) {
            table.increments('id_categoria').primary()
            table.string('categoria_nome', 20).notNullable()
            table.integer('tipo_animais_id', 1).notNullable().unsigned().references('id_tipo').inTable('tipo_animais')
        })
        .createTable('animais', function (table) {
            table.increments('id_animal').primary()
            table.string('nome', 50).notNullable()
            table.string('nome_cientifico', 100).nullable()
            table.text('descricao').nullable()
            table.integer('categoria_animais_id', 2).notNullable().unsigned().references('id_categoria').inTable('categoria_animais')
        })
}


export async function down(knex: Knex): Promise<void> {
    return await knex.schema
        .dropTable('animais')
        .dropTable('categoria_animais')
        .dropTable('tipo_animais')
}
