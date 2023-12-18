const express=require("express")
const { addToCart, getCartItems, updateCartItem, removeFromCart } = require("../controllers/cart")
//const { auth } = require("../middleware/auth")
const cartRouter=express.Router()

cartRouter.post("/add",auth,addToCart)
cartRouter.get("/",auth,getCartItems)
cartRouter.put("/update",auth,updateCartItem)
cartRouter.delete("/delete/:id",auth,removeFromCart)


module.exports={
    cartRouter
}