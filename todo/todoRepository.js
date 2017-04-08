const TodoModel = require('./dataset');

const dataSet = data => ({
    id: data.id || new Date().getTime(),
    name: data.name || 'wop wop', //todo delete default value
    description: data.description || '',
    isDone: data.isDone || false,
    creationDate: data.creationDate || new Date(),
    updateDate: data.updateDate || new Date(),
});

const todos = [];

const getTodos = () => {
    return new Promise((resolve, reject) => {
         TodoModel.find({}, ((err, docs) => {
             if (err) {
                 reject(err);
             }

             resolve(docs);
         }));
     });
}

const create = data => {
     return new Promise((resolve, reject) => {
         const todo = new TodoModel(data);
         todo.save((err, doc) => {
            if (err) {
                reject(err);
            }

             resolve(doc);
         });
     });
}

const getById = id => {
    return new Promise((resolve, reject) => {
        TodoModel.findOne({ _id: id }, ((err, doc) => {
            if (err) {
                reject(err);
            }

            resolve(doc);
        }));
    });
}


const remove = id => {
    return new Promise((resolve, reject) => {
        TodoModel.remove({ _id: id }, ((err, doc) => {
            if (err) {
                reject(err);
            }

            resolve(doc);
        }))
     });
}

const update = (id, data) => {
    return new Promise((resolve, reject) => {
        data.updateDate = new Date();

        TodoModel.update({ _id: id }, data, { new: true }, ((err, doc) => {
            if (err) {
                reject(err);
            }

            resolve(doc);
        }));
     });
}

module.exports = {
    getTodos,
    create,
    update,
    getById,
    remove,
};
