let express = require('express')
let states_api = require('./routes/states')

let app = express() // create exprees

app.use(express.json()) // to makes web serve to understand jason data

app.use('/api', states_api) // this to make all routes in states Api

app.use(function(req, res, next){ // this will handel with names thats not in APi
    res.status(404).send('Not Found')
})

app.use(function(err, req, res, next){
    console.log(err)
    res.status(500).send('Server error') // standard error code
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port', server.address().port)
})