import express from "express";
import cors from "cors";
import bookRoutes from "./routes/book.routes.js";
import userRoutes from "./routes/user.routes.js"; 

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes); 
