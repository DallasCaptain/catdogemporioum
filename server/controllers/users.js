User = require('../models/user.js')

module.exports = {
    show: (req,res)=>{
        user = User.findOne({name:'bob'})
        return user
    },
    create: (req, res) => {
        user = new User ()
        user.name = 'bob'
        user.save()
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log('err',err)
        })
        return user
    },
    find:(params) =>{
        users = User.find(params)
        return users
    }
};