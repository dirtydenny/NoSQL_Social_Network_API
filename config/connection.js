// const { connect, connection} = require('mongoose');

// connect(process.env.MONGODB_URI ||'mongodb://localhost/social_network', {
//   useNewUrlParser:true,
//   useUnifiedTopology: true
// })

// module.exports = connection


const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialmediaAPI",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
module.exports = mongoose.connection;