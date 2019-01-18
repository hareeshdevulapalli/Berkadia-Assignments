'use strict';
var bookshelf = require('../bookshelf');
var Students = bookshelf.Model.extend({
  tableName: 'students',
});
module.exports = Students;