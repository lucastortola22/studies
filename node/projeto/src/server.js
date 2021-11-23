const port = 3003


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./database')

app.use(bodyParser.urlencoded({ extended: true }))

// Using middleware
// app.get('/produtos', (req, resp, next) => {
//     console.log('middleware 1...')
//     next()
// })

app.get('/produtos', (req, resp, next) => {
    resp.send(db.getProducts())
})


app.get('/produtos/:id', (req, resp, next) => {
    resp.send(db.getProduct(req.params.id))
})

app.post('/produtos', (req, resp, next) => {
    const prod = db.saveProduct({
        nome: req.body.name,
        price: req.body.price
    })
    resp.send(prod)
})

app.listen(port, () => {
    console.log(`Server up and running on the port ${port}`)
})