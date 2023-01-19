var express = require('express');
var router = express.Router();

var calculatorController =
require('../controllers/calculatorController')

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res)
})

/*router.get('/div', (req, res) => {
    calculatorController.divNumbers(req,res)
}) */








/*
var express = require('express');

var router = express.Router();


router.get('/add1', (req, res) => {
    calculatorController.addNumbers(req, res)
})

*/

/*
router.get('/add', (req, res) => {
    res.send('Add')
})
*/

/*
router.get('/add', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})
*/

/*
router.get('/add', (req, res) => {
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum= number1 + number2
    console.log("sum of "+number1+" & "+number2+" = "+ sum)
    res.status(200)
    res.json({result:sum})
})

router.get('/sub', (req, res) => {
    //res.send('sub function is called')
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum= number1 - number2
    console.log("sum of "+number1+" & "+number2+" = "+ sum)
    res.status(200)
    res.json({result:sum})
})

router.get('/multi', (req, res) => {
    //res.send('Multi function is called')
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum= number1 * number2
    console.log("sum of "+number1+" & "+number2+" = "+ sum)
    res.status(200)
    res.json({result:sum})
})

*/

router.get('/div2', (req, res) => {
    //res.send('Div function is called')
    let number1=parseInt(req.query.num1);
    let number2=parseInt(req.query.num2);
    let sum= number1 / number2
    console.log("sum of "+number1+" & "+number2+" = "+ sum)
    res.status(200)
    res.json({result:sum})
})
  

router.get('/handle', handleReq);
  
function handleReq(req, res){
    res.send('handing with new function')
  }
  
module.exports = router; 
