const Joi = require('joi');

module.exports = (type) => (req, res, next) => {
    const schema = getSchema(type);
    if (schema) {
         const result = schema.validate(req.body);
         if (result.error) {
             const { details } = result.error;
             const message = details[0].message.replace(/"|'/g, '');
             return res.status(400).json({
                 error: message
             });
         }
    }
    next();
}

const getSchema = (type) => {
    switch (type) {
        case 'register': {
            console.log(Joi.object().keys);
            return Joi.object().keys({
                // username: req.body.username,
                // email: req.body.email,
                // password: req.body.password,
                // nickname: req.body.nickname,

                 userName: Joi.string().required(),
                 email: Joi.string().email().required(),
                 password: Joi.string().required(),
                 confirmPassword: Joi.string().required(),
                 
            })
        }
        case 'login': {
            return Joi.object().keys({
                email: Joi.string().email().required(),
                password: Joi.string().required()
            })
        }
        default: {
            return null;
        }
    }
} 