const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema ({
firstName:{
    type: String,
    required: true,
},
lastName:{
    type: String,
    required: true,
},
email:{
    type: String,
    required: true,
},
password:{
    type: String,
    required: true,
},
number:{
    type: String,
    required: true,
},
dateBirth:{
type:String
},
userRole: {
    type: String,
    default: 'User',
    roles: ['User', 'Admin'],
  },
sexe:String,
});

module.exports = mongoose.model('User', userSchema);