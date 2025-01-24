const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongopratice`);

const userSchema = mongoose.Schema({
    name:String,
    username :String,
    email:String
});

// with the help of this model we can do create ,update,delete ,read
module.exports = mongoose.model('user',userSchema)