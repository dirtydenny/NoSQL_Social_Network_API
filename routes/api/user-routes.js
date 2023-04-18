const router = require("express").Router();
const { getAllUsers, getSingleUser, createUser, deleteUser, updateUser } = require('../../controllers/user-controller');
// get all users
router.route(./).get(getAllUsers).post(createUser);
// get a singel user by id 
router.route('/:userId').get(getSingleUser).delete(deleteUser);
// thoughts
router.route('/:userId/thought')
// friends
