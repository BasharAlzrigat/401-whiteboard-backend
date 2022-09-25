const express=require('express')
const router=express.Router();
const bearerAuth = require("../middlewares/bearer-auth")
const{postCollection}=require('../models/index')


router.post('/post', bearerAuth, createPost);
router.get('/post', bearerAuth, getPost);
router.get('/post/:id', bearerAuth, getOnePost);
router.put('/post/:id', bearerAuth, updatePost);
router.delete('/post/:id', bearerAuth, deletePost);


async function createPost(req,res){
    const obj=req.body;
    let post=await postCollection.create(obj)
    res.status(201).json(post)
}

async function getPost(req,res){
    let post=await postCollection.read();
    res.status(200).json(post)
}

async function getOnePost(req,res){
    const id=parseInt(req.params.id);
    let post=await postCollection.read(id)
    res.status(200).json(post)
}

async function updatePost(req,res){
    const obj=req.body;
    const id=parseInt(req.params.id);
    let post=await postCollection.update(id,obj)
    res.status(201).json(post)
}

async function deletePost(req,res){
    const id=parseInt(req.params.id);
    let post=await postCollection.delete(id)
    res.status(204).json(post)

}

module.exports = router;