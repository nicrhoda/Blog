const router = require('express').Router();
const { User, Post, Comments } = require('../models');
const sequelize = require('../config/connection');
const { Model } = require('sequelize');

router.get('/', (req, res) => {
    Post.findAll({
        Include: [User],
    }).then((data) => {
        const postData = data.map((post) => post.get({ plain: true }));
        res.render('homepage', { postData });
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/dashboard', (req, res) => {
    if(req.session.logged_in) {
        res.render('dashboard');
    } else {
        res.redirect('/login');
        return;
    }
});


module.exports = router;