import dotenv from "dotenv";

dotenv.config();


import app from "./app.js";
import connectDB from "../config/db.js";


connectDB()
.then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error(`Failed to connect to the database: ${error.message}`);
    process.exit(1);
});