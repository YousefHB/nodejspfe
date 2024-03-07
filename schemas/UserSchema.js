const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstname:{type:String,
        required: true,
        trim: true
    },
    lastname:{type:String,
        required: true,
        trim: true
    },
    dateOfBirth: {type: Date,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type:String,
        required : true,
        enum: ['patient', 'healthcare professional']
    },
    profilePic:{
        type:String,
        default: 'https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png' // Default avatar image URL

    }
   

});
const User = mongoose.model('USER', UserSchema);

module.exports = User;