const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

User.hasMany(Post, {
    forgeinKey: 'user_id',
    onDelete: 'cascade',
});

Post.belongsTo(User, {
    forgeinKey: 'user_id',
    onDelete: 'cascade',
});

User.hasMany(Comments ,{
    forgeinKey: 'user_id',
    onDelete: 'cascade',
});

Comments.belongsTo(User, {
    forgeinKey: 'user_id',
    onDelete: 'cascade',
});

Comments.belongsTo(Post, {
    forgeinKey: 'post_id',
    onDelete: 'cascade',
});

Post.hasMany(Comments, {
    forgeinKey: 'post_id',
    onDelete: 'cascade',
});

module.exports = { User, Post, Comments };