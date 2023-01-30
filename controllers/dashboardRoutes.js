const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/withAuth');

router.get('/', withAuth, async (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        }
    }).then((userPost) => {
        const posts = userPost.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts })
        console.log(posts);
    })
});

module.exports = router;