const {Router} = require('express');
const router = Router();

const { getUsers, createUser, getUsersById, deleteUser, updateUser, getRun, getDb } = require('../controllers/index.controller')
router.get('/', getRun);
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser)
router.get('/db', getDb)

module.exports = router;