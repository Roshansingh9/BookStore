import { query, body } from "express-validator";


export const validateBook = [
  body("title").notEmpty().withMessage("Title is required"),
  body("author").notEmpty().withMessage("Author is required"),
  body("price").isFloat({ min: 0 }).withMessage("Price must be a positive number"),
  body("category").notEmpty().withMessage("Category is required"),
  body("rating")
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage("Rating must be between 0 and 5"),
  body("publishedDate")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("Published date must be a valid ISO date"),
];


export const validateBookQuery = [
  query("rating")
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage("Rating must be between 0 and 5"),

  query("page")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Page must be a positive integer"),

  query("limit")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Limit must be a positive integer"),

  query("order")
    .optional()
    .isIn(["asc", "desc"])
    .withMessage("Order must be either 'asc' or 'desc'"),

  query("sortBy")
    .optional()
    .isIn(["price", "rating", "createdAt"])
    .withMessage("SortBy must be one of 'price', 'rating', or 'createdAt'"),
];
