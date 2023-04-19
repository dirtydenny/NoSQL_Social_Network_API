const { User } = require('../models');

module.exports = {
  getAllUsers(req, res) {
    User.find()
      .populate({ path: "thoughts", select: "-__v" })
      .then((userData) => res.json(userData))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate({ path: "friends", select: "-__v" })
      .populate({ path: "thoughts", select: "-__v" })
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // createUser(req, res) {
  //   User.create(req.body)
  //     .then((dbUserData) => res.json(dbUserData))
  //     .catch((err) => res.status(500).json(err));
  // },
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  // add a friend to the user
  addFriend(req, res) {
    console.log("you are adding a friend");
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: "No friend found with that ID :(" })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // burn your friendships to the ground, I mean, delete a friend
  removeFriend(req, res) {
    console.log("you are deleting a friend");
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((userData) =>
        !userData
          ? res.status(404).json({ message: "No user found with that ID :(" })
          : res.json(userData)
      )
      .catch((err) => res.status(500).json(err));
  },
};
  