const postModel = require('../models/postModel');
const fs = require('fs');

module.exports = {

    //SEE ALL POSTS
    allPosts: async(req,res) => 
    {
        try 
        {
           const all_posts = await postModel.find({});
            res.status(200).json(all_posts);      
        } 
        catch (error) {
            res.status(404).json({err: error.message});
        }
        
    },

    //SEE SPECIFIC USER'POSTS
    userPosts: async(req,res) => 
    {
        const query = {"owner.username": req.params.username};
        try 
        {
            const user_posts = await postModel.find(query);
            res.status(200).json(user_posts);
        } 
        catch (error) {
            res.status(404).json({err: error.message});
        }
    },

    //SEE SPECIFIC POST
    seePost: async (req,res) => 
    {
        const post_id = req.params.post_id;
        //const query = {_id: req.params.post_id};
        try 
        {
            const selected_post = await postModel.findById(post_id);
            res.status(200).json(selected_post);
        } 
        catch (error) {
            res.status(404).json({err: error.message});
        }
    },

    //CREATE A NEW POST
    createPost: async (req,res) => 
    {
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try 
        {
            await postModel.create(post);
            res.status(201).json({message: "Post created Successfuly"});
        } 
        catch (error) {
            res.status(404).json({err: error.message});
        }

    },

    //UPDATE A POST
    updatePost: async (req,res) => 
    {
        const post_id = req.params.post_id;
        let new_image = "";
        
        //if user updates the image
        if (req.file)
        {
            new_image = req.file.filename;
            try 
            {
                //remove old image
                fs.unlinkSync("./uploads/"+ req.body.old_image);
            } catch (error) {
                res.status(404).json({err: error.message});
            }
        }
        else
        {
            new_image = req.body.old_image;
        }
        const newPost = req.body;
        newPost.image = new_image;
        try 
        {
            await postModel.findByIdAndUpdate(post_id, newPost);
            res.status(200).json({message: "Post Updated Successfully"});   
        } 
        catch (error) {
            res.status(404).json({err: error.message});
        }
    },

    //DELETE A POST
    deletePost: async (req,res) => 
    {
        const post_id = req.params.post_id;
        try 
        {
            const selected_post = await postModel.findByIdAndDelete(post_id);
            if (selected_post.image!='')
            {
                try 
                {
                    fs.unlinkSync('./uploads/'+selected_post.image);
                } 
                catch (error) 
                {
                    res.status(404).json({err: error})
                }
            }
            res.status(200).json({message: "Post Deleted Successfully"})
        } 
        catch (error) 
        {
            res.status(404).json({err: error.message});
        }
    }

}