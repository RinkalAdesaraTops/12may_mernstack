var express = require('express')
var router = express.Router()
const {disp,ins,del}= require('../controllers/CatController')
router.get('/',disp)
router.post('/insdata',ins)

module.exports = router