'use strict';
var knex = require('knex')(require('./knex'));
var bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;