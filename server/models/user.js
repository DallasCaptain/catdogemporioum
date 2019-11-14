mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String
})
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

module.exports = User