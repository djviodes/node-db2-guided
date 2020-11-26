exports.up = async function(knex) {
    // Translates to `CREATE TABLE fruits (...);`
    await knex.schema.createTable('fruits', (table) => {
        // Translates to `'id' INTEGER NOT NULL UNIQUE PRIMARY KEY`
        // table.integer('id').notNull().unique().primary()
        table.increments('id') // A shortcut to the comment directly above
        table.text('name').notNull().unique()
        table.float('avgWeightInOz').notNull()
        table.boolean('delicious').defaultTo(true)
        table.text('color')
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('fruits')
}
