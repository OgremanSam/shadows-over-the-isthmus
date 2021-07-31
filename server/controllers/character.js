const models = require('../models');


module.exports = {
    get: (req, res, next) => {
        models.Character.find().populate('owner')
            .then((characters) => {
                res.send(characters)})
            .catch(next);
    },

    post: (req, res, next) => {
        const { name, color } = req.body;
        const { _id } = req.user;

        models.Character.create({ name, color, owner: _id })
            .then((createdCharacter) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { characters: createdCharacter } }),
                    models.Character.findOne({ _id: createdCharacter._id })
                ]);
            })
            .then(([userObj, characterObj]) => {
                res.send(characterObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { name, color } = req.body;
        models.Character.updateOne({ _id: id }, { name, color })
            .then((updatedCharacter) => res.send(updatedCharacter))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Character.deleteOne({ _id: id })
            .then((removedCharacter) => res.send(removedCharacter))
            .catch(next)
    }
};