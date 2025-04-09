import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    book_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
      index: true,
      unique: true,
    },
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true },
    category: { type: String },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    publishedDate: { type: Date },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);


bookSchema.virtual("id").get(function () {
  return this.book_id;
});
bookSchema.set("toJSON", { virtuals: true });

export const Book = mongoose.model("Book", bookSchema);
