// core modules
var http = require('http')
const { add, minus } = require('./calc')
http.createServer((req,res)=>{
   // res.write("Hello")
    // res.write("\n Addition is "+add(35,10))
    // minus(25,12)
    res.end()
    // connection closed
}).listen(5000,()=>{
    console.log("Listening to 5000 port");  
})
