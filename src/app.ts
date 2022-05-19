import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth";

const app = express();
const port = process.env.PORT || 8080;

//Middleware
app.use(express.json());

//Settings
app.set("PORT", port);

//routes
app.use(authRoutes);

export default app;
