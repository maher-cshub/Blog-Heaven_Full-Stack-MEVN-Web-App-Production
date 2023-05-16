const mongoose = require('mongoose'),
{Schema} = mongoose;

const postSchema = mongoose.Schema({

    title: {
        type: 'string',
        trim: true,
        require: true
    },
    category: {
        type: 'string',
        trim: true,
        require: true
    },
    content: {
        type: 'string',
        trim: true,
        require: true
    },
    date_created:{
        type: 'Date',
        default: Date.now
    },
    date_updated:{
        type: 'Date',
        default: Date.now
    },
    image: 
    {
        type: 'string',
    },
    /*
    owner: {
            user_id: 
            {
                type: Schema.Types.ObjectId, ref: 'users',
                require: false
            },
            username: 
            {
                type: 'string',
                require: false
            }
    },*/

})

module.exports = mongoose.model("posts", postSchema);