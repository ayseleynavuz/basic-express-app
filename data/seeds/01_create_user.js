/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex("users")
  .del()
  .then(function () {
    return knex("users").insert([
    {id: 1, name: 'Harry Potter'},
    {id: 2, name: 'Don Quixote'},
    {id: 3, name: 'Joan of Arc'}
  ]);
  });
};   
