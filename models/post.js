const mongoose =require('mongoose');
const Schema = mongoose.Schema;
var timeInMs = Date.now();
const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String
    }

})

module.exports = mongoose.model('Post', schema);



