# 📚 Bookstore RESTful API

A RESTful API for a Bookstore Application featuring JWT authentication, advanced filtering, searching, and pagination.

## 🌐 Live Demo

- 🚀 **API Base URL:** [https://bookstore-production-96db.up.railway.app](https://bookstore-production-96db.up.railway.app)
- 📚 **Books List:** [https://bookstore-production-96db.up.railway.app/api/books](https://bookstore-production-96db.up.railway.app/api/books)
- 🔐 **Signup:** [https://bookstore-production-96db.up.railway.app/api/auth/signup](https://bookstore-production-96db.up.railway.app/api/auth/signup)  
- 🔑 **Login:** [https://bookstore-production-96db.up.railway.app/api/auth/login](https://bookstore-production-96db.up.railway.app/api/auth/login)

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- Swagger for API documentation

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 📚 CRUD operations for books
- 🔍 Search by title (partial match)
- 🎯 Filtering by author, category, and rating
- 📃 Pagination and sorting
- ❗ Error handling and validation
- 📘 Swagger API Documentation

## 📦 Installation

### 🔧 Prerequisites

- Node.js (v16 or higher)
- MongoDB

### ⚙️ Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/Roshansingh9/BookStore.git
cd BookStore

# 2. Install dependencies
npm install

# 3. Create .env file
touch .env
```

### ✏️ Environment Variables

Create a `.env` file with the following variables:

```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=30d
```

```bash
# 4. Run the server
npm run dev
```

## 📡 API Endpoints

### 🔐 Authentication

**POST** `/api/auth/signup` – Register a new user
```json
{
  "name": "Roshan",
  "email": "roshan@example.com",
  "password": "password123"
}
```

**POST** `/api/auth/login` – Login user
```json
{
  "email": "roshan@example.com",
  "password": "password123"
}
```
Returns a JWT token to access protected routes

### 📚 Books (Protected – requires JWT)

All requests require a valid JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

**GET** `/api/books` – Get all books

Query Parameters:
- `page`: Page number (default: 1)
- `limit`: Results per page (default: 10)
- `sort`: Sort by field (e.g., price, -rating)
- `author`: Filter by author
- `category`: Filter by category
- `rating`: Filter by minimum rating
- `title`: Partial title match

**POST** `/api/books` – Add a new book
```json
{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "category": "Programming",
  "price": 899,
  "rating": 4.7,
  "publishedDate": "1999-10-30"
}
```

**GET** `/api/books/:id` – Get a book by ID

**PUT** `/api/books/:id` – Update a book
```json
{
  "price": 999,
  "rating": 4.8
}
```

**DELETE** `/api/books/:id` – Delete a book

## 🔍 Filtering & Search Examples

Books by James Clear:
```
GET /api/books?author=James Clear
```

Books in Self Growth category:
```
GET /api/books?category=Self Growth
```

Books with rating ≥ 4.5:
```
GET /api/books?rating=4.5
```

Search title with "Atomic":
```
GET /api/books?title=Atomic
```

Combine filters:
```
GET /api/books?author=James Clear&category=Self Growth&rating=4
```

## ✅ Implementation Details

- Each book has a unique auto-generated bookId (e.g., BOOK-Aj3x82K)
- JWT authentication is used for all protected routes
- Extra Features:
  - 📃 Swagger API Documentation
  - ❗ Robust error handling
  - ✅ Request validation
  - 📄 Pagination, filtering & sorting

## 🧪 Testing

```bash
npm test
```

## 📸 Screenshots

The project includes a `Screenshots` folder containing Postman API response examples.

## 🧑‍💻 Author

Built with ❤️ by Roshan Kumar Singh