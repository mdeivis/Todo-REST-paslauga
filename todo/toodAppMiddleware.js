const httpStatuses = require('http-codes');

const dataValidation = (req, res, next) => {
    if (!req.body) {
        res.status(httpStatuses.BAD_REQUEST).send('Data is required');
    } else {
        if (!req.body.name) {
            res.status(httpStatuses.BAD_REQUEST).send('Name is requied');
        } else if (req.body.name.length > 100) {
            res.status(httpStatuses.BAD_REQUEST).send('Name is to long. Max length 100 characters');
        }
        
        console.log(req.body.name.length)
    }
    
    next();
}

module.exports = dataValidation;