'use strict';
var bookshelf = require('../bookshelf');
var Faculty = bookshelf.Model.extend({
  tableName: 'faculty',
});
module.exports = Faculty;