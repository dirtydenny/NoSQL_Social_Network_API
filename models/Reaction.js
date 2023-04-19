const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionId: {
    // generate a unique id
    type: mongoose.Schema.Types.ObjectId,
    // generate a new id with each reaction
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timeStamp) => timeStamp.toLocaleDateString(),
  },
},
{
 toJSON: {
    virtuals: true,
    getters: true,
  },
  id: false,
}); 

module.exports = reactionSchema;