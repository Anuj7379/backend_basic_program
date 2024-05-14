// const mongoose =require('mongoose');
// const userSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required:[true, 'name is required'],
//         trim: true,
//         maxLength: [20,'name must be less than 20 char']


//     },
//     email:{
//         type: String,
//         required :[true, 'email is required '],
//         unique : true
//     }
// })
// module.exports = mongoose.model("user",userSchema);



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], // Corrected error message
        trim: true,
        maxLength: [20, 'Name must be less than 20 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    }
});

module.exports = mongoose.model("user", userSchema);