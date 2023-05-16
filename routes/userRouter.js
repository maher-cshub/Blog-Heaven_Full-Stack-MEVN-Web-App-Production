
const userRouter = require('express').Router();

const userController = require('../controllers/userController');


userRouter.get('/all', userController.getUsers);


module.exports = userRouter;