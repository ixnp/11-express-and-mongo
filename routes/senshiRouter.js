'use strict'
const express = require('express');
const router = express.Router();

const Senshi = require('../models/senshi.js');
const senshiMongoose = require('../models/senshiMongoose.js');
const mongoose = require('mongoose');

router.get('/', (req, res) => {
    let sen = senshiMongoose.getSenshi();
    res.json(sen); 
  });
// router.get(`/:id`,(req,res)=>{
 
//     res.send(senshi);
//     console.log('get senshi',senshi)
// });
// router.post(`/`,(req,res)=>{
//     const senshi = [new Senshi('Sailor Jupiter','  Makoto Kino',' Lightning Magic/Martial Arts',' Inner Senshi')]
//     res.send(JSON.stringify(senshi));
// });
module.exports = router;

