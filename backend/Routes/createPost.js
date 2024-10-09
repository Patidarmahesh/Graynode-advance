const express = require('express');
const {createPostController,likeController,unlikeController, commentAddController, commentRemoverController, getAllPostController, deletePostController, getPerticularUserPostController, maheshlllllll} = require('../Controller/createPostController');
const requireSignIn = require('../MiddleWare/authMiddleWare');

const createPostRoute = express.Router();

// ________|CREATE POST ROUTE|_________
createPostRoute.post('/createpost',requireSignIn,createPostController);
// ________|CREATE POST ROUTE|_________

// ________|CREATE POST ROUTE|_________
createPostRoute.get('/getallpost',getAllPostController);
// ________|CREATE POST ROUTE|_________

// ________|CREATE POST ROUTE|_________
createPostRoute.delete('/deletepost/:id',requireSignIn,deletePostController);
// ________|CREATE POST ROUTE|_________

// ________|LIKE POST ROUTE|_________
createPostRoute.put('/likes/:id',requireSignIn,likeController);
// ________|LIKE POST ROUTE|__________

// ________|UNLIKE POST ROUTE|_________
createPostRoute.put('/unlike/:id',requireSignIn,unlikeController);
// ________|UNLIKE POST ROUTE|_________

// ________|COMMENT POST ROUTE|_________
createPostRoute.put('/comment/add/:id',requireSignIn,commentAddController);
// ________|COMMENT POST ROUTE|_________

// ________|COMMENT-REMOVE POST ROUTE|_________
createPostRoute.put('/comment/remove/:id',requireSignIn,commentRemoverController);
// ________|COMMENT-REMOVE POST ROUTE|_________

// ________|COMMENT-REMOVE POST ROUTE|_________
createPostRoute.get('/getnameby',getPerticularUserPostController);
// ________|COMMENT-REMOVE POST ROUTE|_________

module.exports = createPostRoute;