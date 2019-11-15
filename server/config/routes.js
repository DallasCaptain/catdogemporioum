

    dogs = require('../controllers/dogs.js')


module.exports = function(app){

    // app.get('/initdogs', (req, res) => {
    //     const dog = new Dog();
    //     dog.name = 'Majestic Dog';
    //     dog.url='./assets/majesticdog.jpg';
    //     dog.favoriteToy = 'Hedgey';
    //     dog.save()
    //     res.redirect('/')
    // })

    app.get('/dogs', (req,res)=>{
        console.log('getting dogs')
        Dog.find({})
        .then(dogs => {res.json(dogs)})
        .catch(err => {
            console.log('stop making errs:',err);
            res.redirect('/')
        })

    })

    app.post('/dogs', dogs.create)

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