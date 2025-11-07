const { ObjectId } = require('mongodb');
const main = require('../models/CatModel')
const ins = async(req,res)=>{
    //insert 
    const conn = await main()
    let db = conn.db
    const collection = db.collection('category');
    let id = new ObjectId(req.body.catid)
    let result = ''
    if(id!=''){
        result = await collection.updateOne({_id:id},{$set:{"catname":req.body.catname}})
    } else {
        result = await collection.insertOne(req.body)
    }
    if(result){
        res.redirect('/category')
    }
}

const del = async(req,res)=>{
    let catid = req.params.id
    let id = new ObjectId(catid)
    const conn = await main()
    let db = conn.db
    const collection = db.collection('category');
    let result = await collection.deleteOne({_id:id})
    if(result){
        res.redirect('/category')
    }
}

const edit = async(req,res)=>{
    let catid = req.params.id
    let id = new ObjectId(catid)
    const conn = await main()
    let db = conn.db
    const collection = db.collection('category');
    let editdata = await collection.findOne({_id:id})
    let data = await collection.find().toArray()
    res.render('category',{
        "catdata":data,
        "editData":editdata
    })
}
const disp = async(req,res)=>{
    const conn = await main()
    let db = conn.db
    const collection = db.collection('category');
    let data = await collection.find().toArray()
    res.render('category',{
        "catdata":data,
        "editData":""
    })
}

module.exports = {ins,del,disp,edit}