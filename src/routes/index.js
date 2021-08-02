const {Router} = require('express');
const router = Router();

const { getTargets, createTarget, getTargetsById, deleteTarget, updateTarget, getRun, getUsersById, createUser, getAssets, getAssetsById, getAports, getAportsById } = require('../controllers/index.controller')
router.get('/', getRun);
router.get('/targets', getTargets);
router.get('/targets/:id', getTargetsById);
router.post('/targets', createTarget);
router.delete('/targets/:id', deleteTarget);
router.put('/targets/:id', updateTarget);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.get('/assets', getAssets);
router.get('/assets/:id', getAssetsById);
router.get('/aport', getAports);
router.get('/aport/:id', getAportsById);

module.exports = router;