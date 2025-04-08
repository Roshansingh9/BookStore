// src/models/Book.model.js

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true },
    category: { type: String },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    publishedDate: { type: Date },
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
