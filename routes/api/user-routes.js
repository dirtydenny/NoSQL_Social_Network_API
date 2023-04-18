const router = require("express").Router();
const { 
  getAllUsers, 
  getSingleUser, 
  createUser, 
  deleteUser,
  updateUser,
  addFriend,
  removeFriend

} = require('../../controllers/user-controller');
// get all users
router.route('/').get(getAllUsers).post(createUser);
// get a singel user by id 
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);
// friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;

