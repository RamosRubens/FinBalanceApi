const {Router} = require('express');
const router = Router();

const { getTargets, createTarget, getTargetsById, deleteTarget, updateTarget, getRun, getUsersById, createUser } = require('../controllers/index.controller')
router.get('/', getRun);
router.get('/targets', getTargets);
router.get('/targets/:id', getTargetsById);
router.post('/targets', createTarget);
router.delete('/targets/:id', deleteTarget);
router.put('/targets/:id', updateTarget);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);

module.exports = router;