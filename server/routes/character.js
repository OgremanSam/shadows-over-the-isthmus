const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.character.get);

router.post('/', auth(), controllers.character.post);

router.put('/:id', auth(), controllers.character.put);

router.delete('/:id', auth(), controllers.character.delete);

module.exports = router;