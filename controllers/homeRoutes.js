const router = require("express").Router();
const { User, Post, Comments } = require("../models");
const sequelize = require("../config/connection");
const { Model } = require("sequelize");
const withAuth = require("../utils/withAuth");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "heading", "content"],
    include: [
      {
        model: Comments,
        attributes: ["id", "content", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((data) => {
      const postData = data.map((post) => post.get({ plain: true }));
      res.render("homepage", { postData, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/singlePost/:id", (req, res) => {
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comments,
        include: [User],
      },
    ],
  })
    .then((data) => {
      const singlepost = data.get({ plain: true });
      res.render("post", { singlepost });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//route to update page
router.get("/updatePost/:id", withAuth, async (req, res) => {
    
    Post.findByPk(req.params.id, {
        include: [
            User,
            {
              model: Comments,
              include: [User],
            },
          ],
    }).then((data) => {
        const renderPost = data.get({ plain: true });
        res.render("updatePost", { renderPost });
    }).catch((err) => {
        res.status(500).json(err);
    })
});

module.exports = router;
