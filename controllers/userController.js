const userModel = require('../models/userModel');


module.exports = {
    
    //SEE ALL USERS
    getUsers: async (req, res) => 
    {
        try 
        {
            const all_users = await userModel.find({});
            res.status(200).json(all_users);
        } 
        catch (error) 
        {
            res.status(404).json({err:error.message});    
        }
        
    },



}