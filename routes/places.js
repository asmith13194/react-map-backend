'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/',(req,res,next)=>{
  console.log("connect to backend route");
  res.send({place:"boulder"})
})

module.exports = router;
