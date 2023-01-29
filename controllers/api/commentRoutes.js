const router = require('express').Router();
const { Comments } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/withAuth');

//new comment route
router.post('/add', withAuth, async (req, res) => {
    try {
        const commentData = await Comments.create({
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        }).then((comment) => {
            res.json(comment);
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;