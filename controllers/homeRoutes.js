const router = require('express').Router();
const { User, Post, Comments } = require('../models');
const sequelize = require('../config/connection');
const { Model } = require('sequelize');


router.get('/', (req, res) => {
    res.render('homepage');
});


module.exports = router;