# Bookstore RESTful API

A RESTful API for a Bookstore Application with JWT authentication, filtering, searching, and pagination.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Swagger for API documentation


## Features

- User Authentication (JWT-based)
- CRUD operations for books
- Filtering by author, category, and rating
- Search by title (partial matches)
- Pagination and sorting
- Error handling and validation
- API documentation with Swagger
- Containerized with Docker

## Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB


### Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/Roshansingh9/BookStore.git
   cd BookStore
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create `.env` file in the root directory with the following content:
   ```
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/bookstore
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRES_IN=30d
   ```

4. Start the server:
   ```
   npm run dev
   ```

5. The API will be available at `http://localhost:5000`
   Swagger documentation will be available at `http://localhost:5000/api-docs`


## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
  - Body: `{ "name": "Roshan", "email": "roshan@example.com", "password": "password123" }`

- `POST /api/auth/login` - Login user
  - Body: `{ "email": "roshan@example.com", "password": "password123" }`
  - Returns JWT token for authentication

### Books (Protected Routes - Require JWT Token)

- `GET /api/books` - Get all books
  - Query parameters:
    - `page` - Page number (default: 1)
    - `limit` - Number of books per page (default: 10)
    - `sort` - Sort by field (e.g., `price`, `-rating`)
    - `author` - Filter by author
    - `category` - Filter by category
    - `rating` - Filter by minimum rating
    - `title` - Search by title (partial match)

- `POST /api/books` - Create a new book
  - Body: 
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

- `GET /api/books/:id` - Get book by ID

- `PUT /api/books/:id` - Update book by ID
  - Body: (fields to update)
    ```json
    {
      "price": 999,
      "rating": 4.8
    }
    ```

- `DELETE /api/books/:id` - Delete book by ID

## Sample Requests

### User Registration

```
POST /api/auth/signup
Content-Type: application/json

{
  "name": "roshan",
  "email": "roshan@example.com",
  "password": "password123"
}
```

### User Login

```
POST /api/auth/login
Content-Type: application/json

{
  "email": "roshan@example.com",
  "password": "password123"
}
```

### Create a New Book

```
POST /api/books
Content-Type: application/json
Authorization: Bearer <your-jwt-token>

{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "category": "Programming",
  "price": 899,
  "rating": 4.7,
  "publishedDate": "1999-10-30"
}
```

### Get Books with Filtering and Pagination

```
GET /api/books?page=1&limit=10&category=Programming&rating=4.5&sort=-price
Authorization: Bearer <your-jwt-token>
```


## Assumptions and Enhancements

1. Each book has a unique `bookId` in the format of `BOOK-Aj3x82K`
2. JWT authentication is used for all book-related routes
3. Added features beyond requirements:
   - Comprehensive error handling
   - Request validation
   - Swagger documentation
   - Docker containerization
   - Pagination and sorting

## Testing

Run the test suite:

```
npm test
```