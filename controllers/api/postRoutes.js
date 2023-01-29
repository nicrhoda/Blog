const router = require('express').Router();
const { Post } = require('../../models')
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/withAuth');

//new post route
router.post('/newPost', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            heading: req.body.heading,
            content: req.body.content,
            user_id: req.session.user_id
        })
        .then((post) => {
            res.json(post);
        })
    } catch (err) {
        res.json(err);
    }
})

module.exports = router;