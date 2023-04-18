const { User } = require('../models');

module.exports = {
  getAllUsers(req, res) {
    User.find()
     .populate({ path: 'thoughts', select: '-__v'})
     .then((users) => res.json(users))
     .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .populate({ path: 'thoughts', select: '-__v'})
    .then((user) => 
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req,res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req,res) {
    User.findOneAndDelete({
      _id: req.params.userId,
    })
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
  },
  updateUser(req,res) {
    User.findOneAndUpdate(
      {
        _id: req.params.userId,
      },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
    }
  