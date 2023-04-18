const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  removeThought,
  updateThought,
  createReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// get all thoughts
router.route('/').get(getAllThoughts).post(createThought);
// get a single thought by id 
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);
// reactions
router.route('/:thoughtId/reactions').post(createReaction);
// remove reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
