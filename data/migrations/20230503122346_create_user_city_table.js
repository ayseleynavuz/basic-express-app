/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("name").notNullable();
      }).createTable("city", (table) => {  
        table.increments("id").primary();;
        table.string("name").notNullable();
  
}).createTable("user_city", (table) => {
    table.integer("user_id").unsigned().notNullable();
    table.integer("city_id").unsigned().notNullable();
    table.foreign("user_id").references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE");
    table.foreign("city_id").references("id").inTable("city").onUpdate("CASCADE").onDelete("CASCADE");
  })


};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("user_city")
    .dropTableIfExists("city")
    .dropTableIfExists("user")

};
