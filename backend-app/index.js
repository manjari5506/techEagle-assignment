const express = require("express")
const app = express()
const cors = require('cors')
const { connectionDB } = require("./db.js")
const { userRouter } = require("./routes/user.js")
const { inventoryRouter } = require("./routes/inventory.js")
const cookieParser = require("cookie-parser")
const { cartRouter } = require("./routes/cart.js")

app.use(cors())
app.use(express.json())
app.use(cookieParser())
require('dotenv').config
const port = process.env.PORT || 8080

app.use("/user", userRouter)
app.use("/inventory", inventoryRouter)
app.use("/cart", cartRouter)
app.listen(port, async () => {
    try {
        await connectionDB
        console.log("Connected to db")
        console.log(`Server is running at port:${port}`)
    } catch (error) {
        console.log("Error connecting to db")
        console.log(error)
    }
})