var express = require('express')
var app = express()
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.get('/home',(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname+'/index.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})
app.listen(5000,()=>{
    console.log('listening to 5000 port'); 
})