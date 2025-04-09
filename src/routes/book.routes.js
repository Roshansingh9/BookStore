

import express from "express";
import {
  getAllBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
} from "../controllers/book.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { validateBookQuery } from "../validators/book.validation.js";
import { validateBook } from "../validators/book.validation.js";
import { validationResult } from "express-validator";

const router = express.Router();


const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
   next();
};
/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: Success
 */

router.get("/", validateBookQuery, handleValidationErrors, getAllBooks);


router.post("/", protect, validateBook, handleValidationErrors, createBook);

router.get("/:id", getBookById);
router.put("/:id", updateBookById);
router.delete("/:id", deleteBookById);

export default router;
