var express = require('express');
var router = express.Router();


router.get('/test', (req, res) => {
res.send('Hello World!')
})


router.get('/test2', (req, res) => {
    res.send('Second test')
})

router.get('/test3', (req, res) => {
    res.send('My name is Otto! test')
})

module.exports = router;