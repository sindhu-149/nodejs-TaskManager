const mongoose = require('mongoose')


// we have created schema for our db using schema method in mongoose
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true, // this will ignore the space before and after the string
        maxlength:[30, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    } 
})

// mongoose.model(<Collectionname>, <CollectionSchema>)
module.exports = mongoose.model('Task', TaskSchema)