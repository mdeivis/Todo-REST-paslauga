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
         resolve(todos);
         
         // if some err
         // reject('A, an error! very bad!');
     });
}

const create = data => {
     return new Promise((resolve, reject) => {
         const newTodo = dataSet(data);
         todos.push(dataSet(data));
         
         resolve(newTodo);
         
         // if some err
         // reject('A, an error!');
     });
}

const getById = id => {
    return new Promise((resolve, reject) => {
         
         // id (from params) comes like string. So === (type) validation does not work.
         const todo = todos.filter(todo => todo.id == id);
         
         if (todo && todo.length) {
             resolve(todo);
         }         
        
         reject('Todo not found :( (Don\'t cheat and enter correct id :)');
     });
}


const remove = id => {
    return new Promise((resolve, reject) => {
         const oldLenght = todos.length;
         
        // id (from params) comes like string. So === (type) validation does not work.
        todos.forEach((todo, index) => {
            if (todo.id == id) {
                todos.splice(index, 1);
            } 
        });
        
        if (oldLenght !== todos.length) {
            resolve('Removed');   
        }
        
         reject('Todo not found :( (Don\'t cheat and enter correct id :)');
     });
}

const update = (id, data) => {
    return new Promise((resolve, reject) => {
         
         // id (from params) comes like string. So === (type) validation does not work.
         todos.forEach((todo, index) => {
            if (todo.id == id) {
                data.updateDate = new Date();
                data.creationDate = todos[index].creationDate;
                data.id = todos[index].id; 
               
               if (!data.name) {
                   data.name = todos[index].name;
               }
               
               if (!data.description) {
                   data.description = todos[index].description;
               }
               
               if (!data.isDone) {
                   data.isDone = todos[index].isDone;
               }
               
               todos[index] = dataSet(data);
                
               resolve(todos[index]);   
            } 
        });
        
         reject('Todo not found :( (Don\'t cheat and enter correct id :)');
     });
}

module.exports = {
    getTodos,
    create,
    update,
    getById,
    remove,
};
