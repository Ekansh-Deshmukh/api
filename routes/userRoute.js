const express = require('express');
const router = express.Router();

// /api/user + /
router.get('/',function(req,res,next){
    res.status(200).json({message:"hello world"})
})

router.post('/create',function(req,res,next){
    res.status(201).json({success:true,user:req.body})
})

module.exports = router;