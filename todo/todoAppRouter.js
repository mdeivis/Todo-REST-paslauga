const routes = require('express').Router();

const todoAppService = require('./todoAppService');

routes.get('/', todoAppService.get);
routes.get('/:id', todoAppService.getOne);
routes.post('/', todoAppService.create);
routes.put('/:id', todoAppService.update);
routes.delete('/:id', todoAppService.remove);

module.exports = routes;