// src/controllers/book.controller.js

import { Book } from "../models/book.model.js";

// Create Book
export const createBook = async (req, res) => {
  try {
    const { title, author, category, price, rating, publishedDate } = req.body;
    const book = await Book.create({
      title,
      author,
      category,
      price,
      rating,
      publishedDate,
      addedBy: req.user._id,
    });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get All Books
// controllers/book.controller.js



export const getAllBooks = async (req, res) => {
  try {
    const { author, category, rating, title } = req.query;

    let query = {};

    if (author) {
      query.author = { $regex: author, $options: "i" }; // case-insensitive partial match
    }

    if (category) {
      query.category = { $regex: category, $options: "i" };
    }

    if (rating) {
      query.rating = { $gte: Number(rating) }; // rating >= provided rating
    }

    if (title) {
      query.title = { $regex: title, $options: "i" }; // partial search
    }

    const books = await Book.find(query).populate("addedBy", "name email");

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get Book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("addedBy", "name email");
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Book
export const updateBookById = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Book
export const deleteBookById = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
