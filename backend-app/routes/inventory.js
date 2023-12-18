const express=require("express")
const { addProduct, updateProduct, deleteProduct, getProducts, getProduct } = require("../controllers/inventory")
//const { protectRoute } = require("../middleware/protectRoute")
const productRouter=express.Router()

productRouter.get("/",getProducts)
productRouter.get("/:id",getProduct)
productRouter.post("/add",protectRoute,addProduct)
productRouter.put("/update/:id",protectRoute,updateProduct)
productRouter.delete("/delete/:id",protectRoute,deleteProduct)



module.exports={
    productRouter
}