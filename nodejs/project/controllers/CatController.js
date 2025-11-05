const main = require('../models/CatModel')
const ins = async(req,res)=>{
    //insert 
    const conn = await main()
    let db = conn.db
    const collection = db.collection('category');
    let result = await collection.insertOne(req.body)
    if(result){
        res.redirect('/category')
    }

}

const del = (req,res)=>{
    //delete 
}
const disp = (req,res)=>{
    res.render('category')
}

module.exports = {ins,del,disp}