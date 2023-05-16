const mainRouter = require('express').Router();
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');

mainRouter.use('/posts',postRouter);

mainRouter.use('/users',userRouter);




module.exports = mainRouter;