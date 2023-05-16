const postRouter = require('express').Router();

const postController = require('../controllers/postController');

//multer for file upload
const multer = require('multer');

//multer middleware
let storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'./uploads');
    },
    filename: function(req,file,cb) {
        cb(null,file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
})

let upload = multer({
    storage: storage,
}).single('image');


postRouter.get('/all',postController.allPosts);

postRouter.get('/see/:post_id',postController.seePost);

postRouter.get('/:username',postController.userPosts);


postRouter.post('/create',upload,postController.createPost);

postRouter.patch('/update/:post_id',upload,postController.updatePost);

postRouter.delete('/delete/:post_id',postController.deletePost);

module.exports = postRouter;