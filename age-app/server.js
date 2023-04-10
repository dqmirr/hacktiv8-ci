const express = require("express")
const app = express()
const past = require('./past')
const future = require('./future')

app.get('/', (req, res) =>{
    res.send(past(req.params.age, 10) + future(req.params.future))
})

app.listen(3000, ()=>{
    console.info("server running on port : 3000")
})