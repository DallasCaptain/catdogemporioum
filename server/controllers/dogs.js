Dog = require('../models/dog.js')

module.exports = {
    show: (req,res)=>{
        dog = Dog.findOne({name:'bob'})
        return dog
    },
    create: (req, res) => {
        dog = new Dog()
        console.log('req is:',req.body)
        dog.name = req.body.name
        dog.url = req.body.url
        dog.favoriteToy = req.body.favoriteToy
        console.log('saving dog',dog)
        dog.save()

        .then(dog => {res.json(dog)})
        .catch(err => {
            console.log('stop making errs creating dogs:',err);
            res.json({err:err})
        })
    },
    find:(params) =>{
        dogs = Dog.find(params)
        return dogs
    }
};