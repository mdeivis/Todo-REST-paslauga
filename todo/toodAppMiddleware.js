const httpStatuses = require('http-codes');

const dataValidation = (req, res, next) => {
    // Here we can create function for each rule. 
    if (!req.body) {
        res.status(httpStatuses.BAD_REQUEST).send('Data is required');
    } else {
        if (!req.body.name) {
            res.status(httpStatuses.BAD_REQUEST).send('Name is requied');
        } else if (req.body.name.length > 100) {
            res.status(httpStatuses.BAD_REQUEST).send('Name is to long. Max length 100 characters');
        }
    }
    
    next();
}

module.exports = dataValidation;