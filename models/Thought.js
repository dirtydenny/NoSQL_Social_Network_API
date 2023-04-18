const mongoose = require("mongoose");
const reactionSchema = require("./Reaction")

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timeStamp) => timeStamp.toLocaleDateString(),
  },
  userName: {
    type: String,
    required: true,
  },
  reactions: [ reactionSchema ],
},
{
  toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
}); 

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
