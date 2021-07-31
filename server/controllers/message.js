const models = require('../models');


module.exports = {
    get: (req, res, next) => {
        models.Message.find().populate('author')
            .then((messages) => {
                res.send(messages)})
            .catch(next);
    },

    post: (req, res, next) => {
        const { description, character, location, color } = req.body;
        const { _id } = req.user;

        models.Message.create({ description, character, location, color, author: _id })
            .then((createdMessage) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { messages: createdMessage } }),
                    models.Message.findOne({ _id: createdMessage._id })
                ]);
            })
            .then(([userObj, messageObj]) => {
                res.send(messageObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Message.updateOne({ _id: id }, { $set: { description } })
            .then((updatedMessage) => res.send(updatedMessage))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Message.deleteOne({ _id: id })
            .then((removedMessage) => res.send(removedMessage))
            .catch(next)
    }
};