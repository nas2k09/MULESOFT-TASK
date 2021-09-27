
const express = require('express');
const router  = express.Router();
const Post = require('../model/Movies');

router.get('/', async(req,res) => {
    try{
const posts = await Post.find();
res.json(posts);
    }catch(err){
        res.json({message: err});
    }
})

router.post('/', async (req,res) => {
    //console.log(req.body);
    const datas = new Post({
        name: req.body.name,
        actor:req.body.actor,
        actress: req.body.actress,
        director: req.body.director,
        year: req.body.year
        
    });
try{
    const Attendence = await datas.save()
        res.json(Attendence);
    }catch(err){
        res.json({message: err});
    }
});



module.exports = router;