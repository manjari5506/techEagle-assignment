const mongoose=require('mongoose')

const inventorySchema = mongoose.Schema({
    name: String,
    image: String,
    description: String,
    quantity: Number,
    price: Number,
  });
  
  const ProductModel = mongoose.model('Inventory', inventorySchemaSchema);

  module.exports={
    InventoryModel
  }