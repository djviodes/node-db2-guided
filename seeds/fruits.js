exports.seed = async function(knex) {
  // Clears out the table so we can start fresh
  await knex('fruits').truncate()

  await knex('fruits').insert([
    { name: 'dragon fruit', avgWeightInOz: 16.7, delicious: true, color: 'red' },
    { name: 'durian', avgWeightInOz: 52.9, delicious: false, color: 'yellow' },
    { name: 'rambutan', avgWeightInOz: 1.1, delicious: true, color: 'pink' },
    { name: 'lingonberry', avgWeightInOz: 0.01, delicious: true, color: 'red' },
    { name: 'golden gooseberry', avgWeightInOz: 0.02, delicious: false, color: 'yellow' },
  ])
}
