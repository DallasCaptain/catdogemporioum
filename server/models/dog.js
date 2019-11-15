mongoose = require('mongoose')

const DogSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minLength: 3
    },
    url: {
        type:String,
        required: true,
        minLength: 3
    },
    favoriteToy: {
        type:String,
        required: true,
        minLength: 3
    },
})
// create an object that contains methods for mongoose to interface with MongoDB
const Dog = mongoose.model('Dog', DogSchema);

module.exports = Dog