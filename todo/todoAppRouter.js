const routes = require('express').Router();

const todoAppService = require('./todoAppService');
const toodAppMiddleware = require('./toodAppMiddleware');

// @todo define apiGroup?

/**
 * @api {get} /api/user/todo/ Request todos list
 * @apiName get
 * @apiGroup Todo
 *
 * @apiSuccess {Array} Array of objects of todos.
 */
routes.get('/', todoAppService.get);

/**
 * @api {get} /api/user/todo/:id Request single todo by id
 * @apiName get
 * @apiGroup Todo
 *
 * @apiParam {Number} id Todos unique ID.
 *
 * @apiSuccess {Object} Object of Todo.
 * @apiFailure {String} Error message.
 */
routes.get('/:id', todoAppService.getOne);

/**
 * @api {post} /api/user/todo/ Creates a new todo and inserts into todos list.
 * @apiName post
 * @apiGroup Todo
 *
 * @apiParam {Number} id Todos unique ID.
 *
 * @apiSuccess {Object} Object of Todo.
 * @apiFailure {String} Error message.
 */
routes.post('/', toodAppMiddleware, todoAppService.create);

/**
 * @api {put} /api/user/todo/:id Updates single todo by id.
 * @apiName get
 * @apiGroup Todo
 *
 * @apiParam {Number} id Todos unique ID.
 *
 * @apiSuccess {Object} Object of Todo.
 * @apiFailure {String} Error message.
 */
routes.put('/:id', toodAppMiddleware, todoAppService.update);

/**
 * @api {delete} /api/user/todo/:id removes todo by id.
 * @apiName delete
 * @apiGroup Todo
 *
 * @apiParam {Number} id Todos unique ID.
 *
 * @apiSuccess {String} Success message.
 * @apiFailure {String} Error message.
 */
routes.delete('/:id', todoAppService.remove);

module.exports = routes;