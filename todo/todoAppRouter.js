const routes = require('express').Router();

const todoAppService = require('./todoAppService');
const toodAppMiddleware = require('./toodAppMiddleware');

routes.get('/', todoAppService.get);
routes.get('/:id', todoAppService.getOne);
routes.post('/', toodAppMiddleware, todoAppService.create);
routes.put('/:id', toodAppMiddleware, todoAppService.update);
routes.delete('/:id', todoAppService.remove);

module.exports = routes;