const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought',
    },
  ],
  friends: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}); 

const User = mongoose.model("User", userSchema);

module.exports = User;