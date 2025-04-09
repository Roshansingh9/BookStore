import express from "express";
import cors from "cors";
import bookRoutes from "./routes/book.routes.js";
import userRoutes from "./routes/user.routes.js"; 
import { errorHandler } from "./middlewares/errorHandler.js";

import { setupSwagger } from "./swagger.js";




export const app = express();
setupSwagger(app);
app.use(errorHandler);
app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes); 

export default app;
