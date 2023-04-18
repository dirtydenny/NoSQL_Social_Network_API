const { Thought, User } = require('../models');

module.exports = {
 // see all thoughts
  getAllThoughts(req, res) {
    Thought.find()
     .sort({ createdAt: -1 })
     .then((thoughtData) => res.json(thoughtData))
     .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
     });
  },
  // retrieve a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
// have a thought
  createThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { thoughts: thoughtData._id } },
      { runValidators: true, new: true })
    .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No user with that ID, but thought created." })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
// remove a thought
  removeThought(req, res) {
    Thought.findOneAndRemove(
      { _id: req.params.thoughtId })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No such thought exists' })
          : Course.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((userData) =>
        !userData
          ? res.status(404).json({
              message: 'Thought deleted, but no user assocated to it',
            })
          : res.json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {  $set: req.body },
      { runValidators: true, new: true })
    .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thought with that ID." })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));

  },
// create a reaction to a thought
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: "No thought found with that ID :(" })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
// remove a reacton to a thought
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thoughtData) =>
        !thoughtData
          ? res
              .status(404)
              .json({ message: "No thought found with that ID :(" })
          : res.json(thoughtData)
      )
      .catch((err) => res.status(500).json(err));
    },
  };