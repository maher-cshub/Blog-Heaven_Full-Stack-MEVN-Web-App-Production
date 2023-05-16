const mongoose = require('mongoose'),
{Schema} = mongoose

const userSchema = new Schema({

    name:{
        type: 'string',
        trim: true,
        require: true
    },
    username:{
        type: 'string',
        require: true,
        unique: true,
    },
    date_of_birth: {
        type: 'Date',
        required: true,
    },
    email: {
        type: 'string',
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
    },

})

module.exports = mongoose.model("users",userSchema);