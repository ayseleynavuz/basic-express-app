/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_city').del()
  await knex('user_city').insert([
    {user_id: 1, city_id: 1},
    {user_id: 2, city_id:  2},
    {user_id: 3, city_id: 3}
  ]);
};
