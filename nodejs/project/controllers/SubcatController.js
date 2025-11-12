const { ObjectId } = require('mongodb');
const main = require('../models/CatModel')
const ins = async(req,res)=>{
    //insert 
    const conn = await main()
    let db = conn.db
    const collection = db.collection('subcategory');
    let id=req.body.subcatid
    if(req.body.subcatid != ''){
            id = new ObjectId(req.body.subcatid)
    }
    let result = ''
    if(id!=''){
        result = await collection.updateOne({_id:id},{$set:{"catid":req.body.catid,"subcatname":req.body.subcatname}})
    } else {
        result = await collection.insertOne(req.body)
    }
    if(result){
        res.redirect('/subcategory')
    }
}

const del = async(req,res)=>{
    let catid = req.params.id
    let id = new ObjectId(catid)
    const conn = await main()
    let db = conn.db
    const collection = db.collection('subcategory');
    let result = await collection.deleteOne({_id:id})
    if(result){
        res.redirect('/subcategory')
    }
}

const edit = async(req,res)=>{
    let catid = req.params.id
    let id = new ObjectId(catid)
    const conn = await main()
    let db = conn.db
    const collection = db.collection('subcategory');
    const collection1 = db.collection('category');
    let editdata = await collection.findOne({_id:id})
    let data = await collection.find().toArray()
    let catdata = await collection1.find().toArray()
    let res_final = data.map((i)=>{
        let catname = catdata.find((j)=>{
            return j._id.toString() == i.catid.toString()
        })
        i.catname = catname ? catname.catname : ''
        return i
    })
    res.render('subcategory',{
        "subcatdata":res_final,
        "editData":editdata,
        "catdata":catdata
    })
}
const disp = async(req,res)=>{
    const conn = await main()
    let db = conn.db
    const collection = db.collection('subcategory');
    const collection1 = db.collection('category');
    let data = await collection.find().toArray()
    let catdata = await collection1.find().toArray()
    let res_final = data.map((i)=>{
        let catname = catdata.find((j)=>{
            return j._id.toString() == i.catid.toString()
        })
        i.catname = catname ? catname.catname : ''
        return i
    })
    res.render('subcategory',{
        "subcatdata":res_final,
        "catdata":catdata,
        "editData":""
    })
}

module.exports = {ins,del,disp,edit}