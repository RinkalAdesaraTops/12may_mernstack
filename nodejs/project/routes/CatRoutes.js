var express = require('express')
var router = express.Router()
const {disp,ins,del,edit}= require('../controllers/CatController')
router.get('/',disp)
router.post('/insdata',ins)
router.get('/del/:id',del)
router.get('/edit/:id',edit)

module.exports = router