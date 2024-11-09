import express from "express"
import env from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRoutes from "./routes/auth.route.js"
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"
import couponRoutes from "./routes/coupon.route.js"
import paymentRoutes from "./routes/payment.route.js"
import analytictRoutes from "./routes/analytic.route.js"
import path from 'path'

import { connectDB } from "./libs/db.js"

env.config()
connectDB()

const app = express();
const PORT = process.env.PORT || 8000
const __dirname = path.resolve()

app.use(cors({
    credentials: true,
    origin: ["http://localhost:5173"]

}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/products", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/coupons", couponRoutes)
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analytictRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))