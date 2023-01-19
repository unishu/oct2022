const express = require('express')
const app = express()
const port = 3000

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);

var testRoute = require('./routes/myTestRoute')

let calculatorRoute = require('./routes/calculatorRoute')


app.use('/', express.static('public'));

app.use('/mytest', testRoute);

app.use('/calculator', calculatorRoute)















/*
app.get('/', (req, res) => {
res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('This is a test')
})

app.get('/demo', (req, res) => {
    res.send('Hi, my name is Otto!')
})

app.get('/trial', (req, res) => {
    res.send('Hello! My name is Tato')
}) */

app.listen(port, () => {
console.log(`Example app listening
at http://localhost:${port}`)
})