var express = require('express')
var app = express()
var catRoutes = require('./routes/CatRoutes')
var subcatRoutes = require('./routes/SubcatRoutes')
// var app = express.Router()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/home',(req,res)=>{
        res.render('home')
})
app.use('/category',catRoutes)
app.use('/subcategory',subcatRoutes)
// app.get('/category',(req,res)=>{
//         res.render('category')
// })
app.listen(5000,()=>{
    console.log('5000 port running...');  
})