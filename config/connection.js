const { connect, connection} = require('mongoose');

connect(process.env.MONGODB_URI ||'mongodb://localhost/social_network', {
  useNewUrlParser:true,
  useUnifiedTopology: true
})

module.exports = connection