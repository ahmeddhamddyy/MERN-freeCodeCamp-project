import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json());


app.use("/api/products", productRoutes);

const PORT = process.env.PORT = 5000



// Start the server after DB connection
connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Server started at " + PORT);
    });
}).catch((error) => {
    console.log("Error starting server:", error.message);
    process.exit(1); // Exit if DB connection fails
});
