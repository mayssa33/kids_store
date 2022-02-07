const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  userId: {
    type: String,
  },
  items: [
    {
      productId: {
        type: String,
      },
      name: String,
      quantity: {
        type: Number,
        required: true,
      },
      price: Number,
    },
  ],
  bill: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = Cart = mongoose.model('card', CardSchema);
