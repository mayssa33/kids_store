const mongoose = require('mongoose')
const schema = mongoose.Schema


const productSchema = new schema({
    title: {
        type: String,
        required: true,
      },
      brand:{
        type:String,
        required:true,
      },
      souscategory: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      imageUrl:[{
        type:String,
        required:true,
      }],
      category: {
        type:String,
        required:true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      date_added: {
        type: Date,
        default: Date.now(),
      },
})


module.exports = mongoose.model('Product',productSchema)