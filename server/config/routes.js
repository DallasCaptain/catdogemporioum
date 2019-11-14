

    users = require('../controllers/users.js')


module.exports = function(app){
    app.get('/dungeon', function (req, res) {
       
        res.redirect('/')
       
    })
       
    app.get('/castle', function (req, res) {
       
        res.redirect('/')
       
    })

    app.get('/bob', (req,res)=>{
        users.create(req,res)
        res.redirect('/')
    })
    app.get('/bobs', (req,res)=>{
        users.find({name: 'bob'})
        .then(data =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));

        })
        .catch(err => {
            console.log('err:',err)
        })
    })
}   