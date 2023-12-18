const mongoose=require("mongoose")

const cartSchema = mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    quantity: Number,
    items: [{
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      }
    }],
  });

  const CartModel=mongoose.model('Cart',cartSchema)

  module.exports={
    CartModel
  }