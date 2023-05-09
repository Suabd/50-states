let express = require('express')
let States = require('../models').States

let router = express.Router()

// fetch all of the states
router.get('/states', function(req, res, next){
    States.findAll({ order: ['name']}).then( states => {
        return res.json(states)
    })
    .catch( err => next(err) )
})

// patch router to update a state - visitied or not
// request to states/Iowa
router.patch('/states/:name', function(req, res, next){
    let stateName = req.params.name       //Iowa
    let stateVisited = req.body.visited   // true

    States.update( { visited: stateVisited }, { where: { name:stateName }})
        .then( rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated == 1) {
                return res. send('ok') // if the state in the database it will send ok
                                        // status code 200
            }
            return res.status(404).send('State not found') // state nnot in database send a 404
        })
        .catch( err => next (err) ) // diffrent problem will send this
})

module.exports = router