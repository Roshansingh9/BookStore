
import { validationResult } from "express-validator";
import { Book } from "../models/book.model.js";

export const createBook = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400);
    return next(new Error(errors.array()[0].msg));
  }

  try {
    const newBook = new Book({
      ...req.body,
      addedBy: req.user._id,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    next(error);
  }
};



export const getAllBooks = async (req, res) => {
  try {
    const { author, category, rating, title, page = 1, limit = 10, sortBy = "createdAt", order = "desc" } = req.query;

    let query = {};

    if (author) query.author = { $regex: author, $options: "i" };
    if (category) query.category = { $regex: category, $options: "i" };
    if (rating) query.rating = { $gte: Number(rating) };
    if (title) query.title = { $regex: title, $options: "i" };

    const sortOptions = {};
    if (sortBy) sortOptions[sortBy] = order === "asc" ? 1 : -1;

    const skip = (Number(page) - 1) * Number(limit);

    const books = await Book.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(Number(limit))
      .populate("addedBy", "name email");

    const total = await Book.countDocuments(query);

    res.status(200).json({
      total,
      page: Number(page),
      limit: Number(limit),
      books,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("addedBy", "name email");
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


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


export const deleteBookById = async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
