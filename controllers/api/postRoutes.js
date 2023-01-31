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
});

//update post route
router.put('/:id', withAuth, async (req, res) => {
    console.log(req.body);
    console.log(req.params.id)
    if(req.session.user_id === req.body.user_id){
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then((newpostData) => {
            console.log(newpostData);
            res.status(200).json(newpostData);
        })
    } catch (err) {
        res.status(500).json(err);
    }
} else {
    res.json({ message: 'You must be the author to edit a post' });
}
});

//delete post route
router.delete('/deletePost/:id', withAuth, async (req, res) => {
    try {
    Post.destroy({
        where: {
            id: req.params.id
        }
   })
   res.status(200).json({message: 'Post deleted' });
} catch (err) {
    res.status(500).json(err);
}
})

module.exports = router;