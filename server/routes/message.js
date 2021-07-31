const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.message.get);

router.post('/', auth(), controllers.message.post);

router.put('/:id', auth(), controllers.message.put);

router.delete('/:id', auth(), controllers.message.delete);

module.exports = router;