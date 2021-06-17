const Router = require('koa-router');

const books = new Router();
const booksCtrl = require('./books.controller');

books.get('/', booksCtrl.list);
books.post('/', booksCtrl.create);


module.exports = books;