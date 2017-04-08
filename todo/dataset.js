var mongoose = require('mongoose');

module.exports = mongoose.model('todos', {
    name: { type: String, required: true, maxlength: 100 },
    description: { type: String, required: true },
    isDone: { type: Boolean, default: false },
    updateDate: {type: Date, default: Date.now},
    creationDate: {type: Date, default: Date.now}
});