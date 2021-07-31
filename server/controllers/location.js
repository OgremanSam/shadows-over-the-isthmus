const models = require('../models');


module.exports = {
    get: (req, res, next) => {
        models.Location.find().populate('author')
            .then((messages) => {
                res.send(messages)})
            .catch(next);
    },

    post: (req, res, next) => {
        const { name, image } = req.body;

        models.Location.create({ name, image })
            .then((createdLocation) => {
                return models.Location.findOne({ _id: createdLocation._id });
            })
            .then((messageObj) => {
                res.send(messageObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { name, image } = req.body;
        models.Location.updateOne({ _id: id }, { $set: { name, image } })
            .then((updatedLocation) => res.send(updatedLocation))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Message.deleteOne({ _id: id })
            .then((removedLocation) => res.send(removedLocation))
            .catch(next)
    }
};