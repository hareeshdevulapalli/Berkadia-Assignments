'use strict';
exports.up = function(knex) {
  return knex.schema
    .createTable('students', function(table) {
      table.string('sid').primary();
      table.string('sname');
      table.string('sage');
      table.string('enrolledcourse');
      table.string('department');
    });
};
exports.down = function(knex) {
  return knex.schema
    .dropTable('students');
};