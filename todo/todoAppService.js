const httpStatuses = require('http-codes');

const todoRep = require('./todoRepository');

const get = (req, res) => {
    todoRep.getTodos()
        .then(entities => {
            res.status(httpStatuses.OK).send(entities);
        })
        .catch(err => {
            res.status(httpStatuses.INTERNAL_SERVER_ERROR).send(err);
        });
}

const getOne = (req, res) => {
    todoRep.getById(req.params.id)
        .then(entity => {
            res.status(httpStatuses.OK).send(entity);
        })
        .catch(err => {
            res.status(httpStatuses.BAD_REQUEST).send(err);
        }); 
}

const create = (req, res) => {
    todoRep.create(req.body)
        .then(entity => {
            res.status(httpStatuses.OK).send(entity);
        })
        .catch(err => {
            res.status(httpStatuses.INTERNAL_SERVER_ERROR).send(err);
        });
}

const update = (req, res) => {
    todoRep.update(req.params.id, req.body)
        .then(entity => {
            res.status(httpStatuses.OK).send(entity);
        })
        .catch(err => {
            res.status(httpStatuses.BAD_REQUEST).send(err);
        });
}

const remove = (req, res) => {
    todoRep.remove(req.params.id)
        .then(entity => {
            res.status(httpStatuses.OK).send(entity);
        })
        .catch(err => {
            res.status(httpStatuses.BAD_REQUEST).send(err);
        });
}

module.exports = {
    get,
    getOne,
    create,
    update,
    remove,
}