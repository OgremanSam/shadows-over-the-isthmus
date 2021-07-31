const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.location.get);

router.post('/', auth(), controllers.location.post);

router.put('/:id', auth(), controllers.location.put);

router.delete('/:id', auth(), controllers.location.delete);

module.exports = router;