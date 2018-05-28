var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Cynoc:0244938894@ds229690.mlab.com:29690/node-todo-api');

module.exports = {mongoose};
