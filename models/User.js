// we create a user model.
// user model is data that our app is expected to receive.

const {Schema,model} = require("mongoose");


// we create the schema
const UserSchema = new Schema({


    email: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    }
}, {
    timestamps:true
})


// we create the model and export it

const User=model("User",UserSchema);
module.exports = User;