/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex("city")
  .del()
  .then(function () {
    return knex("city").insert([
    {id: 1, name: 'London'},
    {id: 2, name: 'Madrid'},
    {id: 3, name: 'Paris'}
  ]);
  });
};   
