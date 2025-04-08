// src/routes/book.routes.js

import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} from "../controllers/book.controller.js";

const router = express.Router();

router.post("/create", protect, createBook);             // Create book
router.get("/", getAllBooks);                      // Get all books
router.get("/:id", getBookById);                   // Get book by ID
router.put("/:id", protect, updateBookById);       // Update book by ID
router.delete("/:id", protect, deleteBookById);    // Delete book by ID

export default router;
