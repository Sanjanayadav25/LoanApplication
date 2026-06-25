import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/mongodb.js";
import applicationRoutes from "./routes/applicationRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/applications", applicationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
