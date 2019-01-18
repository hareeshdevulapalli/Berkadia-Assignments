'use strict';
exports.up = function(knex) {
  return knex.schema
    .createTable('faculty', function(table) {
      table.string('fid').primary();
      table.string('fname');
      table.string('fage');
      table.string('teachingcourse');
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTable('faculty');
};