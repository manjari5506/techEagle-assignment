const { InventoryModel } = require("../models/inventory");


const getInventory=async(req,res)=>{
    try {
        const inventory=await InventoryModel.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log("Error")
    }
}

const getInventoryProduct=async(req,res)=>{
    const id=req.params.id
    try {
        const inventory=await InventoryModel.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log("Error")
    }
}
const addInventoryProduct=async(req,res)=>{
    try {
        const inventoryProduct=new InventoryModel(req.body)
        await product.save()
        res.status(201).json({message:"New Product added into the inventory",inventoryProduct})
        
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log("Error in addProduct: ", error.message)
    }
}

const updateInventoryProduct=async(req,res)=>{
    try {
        const inventoryProduct=await InventoryModel.findByIdAndUpdate({_id:req.params.id},req.body,{ new: true })
        res.status(200).json({message:"Product updated successfully",inventoryProduct})
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log("Error in updateProduct: ", error.message)
    }
}

const deleteInventory=async(req,res)=>{
    try {
        await InventoryModel.findByIdAndDelete({_id:req.params.id})
        res.status(200).json({message:"Product deleted successfully"})
    } catch (error) {
        res.status(500).json({error:error.message})
        console.log("Error in delete: ", error.message)
    }
}

module.exports={
    getInventory,
    getInventoryProduct,
    addInventoryProduct,
    updateInventoryProduct,
    deleteInventory
}