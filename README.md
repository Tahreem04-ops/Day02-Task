
# Book Store API

A simple **Book Store REST API** built with **Node.js** and **Express.js**.  
This project demonstrates **Express Routing** and **Controllers** by implementing full **CRUD operations** for books.

---

## Features

- Get all books
- Get a single book by ID
- Add a new book
- Update an existing book
- Delete a book

---

## Technologies Used

- Node.js
- Express.js
- JavaScript

---

## Project Structure

```bash
Book-store-Api/
│
├── controllers/
│   └── bookController.js
│
├── routes/
│   └── bookRoutes.js
│
├── data/
│   └── books.js
│
├── app.js
├── package.json
└── README.md
````

---

## Installation and Setup

### 1. Clone or download the project

If the project is already on your system, open it in **VS Code**.

### 2. Open terminal in project folder

Make sure you are inside the project folder:

```bash
cd Book-store-Api
```

### 3. Install dependencies

```bash
npm install
```

If Express is not installed, run:

```bash
npm install express
```

### 4. Start the server

```bash
node app.js
```

If the server starts successfully, you will see:

```bash
Server is running on http://localhost:3000
```

---

## API Base URL

```bash
http://localhost:3000/api/books
```

---

# API Endpoints

## 1. Get All Books

### Request

```http
GET /api/books
```

### Example URL

```bash
http://localhost:3000/api/books
```

### Response

```json
{
  "success": true,
  "message": "All books fetched successfully",
  "data": [
    {
      "id": 1,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "price": 1200
    },
    {
      "id": 2,
      "title": "Atomic Habits",
      "author": "James Clear",
      "price": 1500
    }
  ]
}
```

---

## 2. Get Book by ID

### Request

```http
GET /api/books/:id
```

### Example URL

```bash
http://localhost:3000/api/books/1
```

### Response

```json
{
  "success": true,
  "message": "Book fetched successfully",
  "data": {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 1200
  }
}
```

---

## 3. Add a New Book

### Request

```http
POST /api/books
```

### Example URL

```bash
http://localhost:3000/api/books
```

### Request Body

```json
{
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki",
  "price": 1800
}
```

### Response

```json
{
  "success": true,
  "message": "Book added successfully",
  "data": {
    "id": 3,
    "title": "Rich Dad Poor Dad",
    "author": "Robert Kiyosaki",
    "price": 1800
  }
}
```

---

## 4. Update a Book

### Request

```http
PUT /api/books/:id
```

### Example URL

```bash
http://localhost:3000/api/books/2
```

### Request Body

```json
{
  "title": "Atomic Habits Updated",
  "author": "James Clear",
  "price": 1700
}
```

### Response

```json
{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "id": 2,
    "title": "Atomic Habits Updated",
    "author": "James Clear",
    "price": 1700
  }
}
```

---

## 5. Delete a Book

### Request

```http
DELETE /api/books/:id
```

### Example URL

```bash
http://localhost:3000/api/books/1
```

### Response

```json
{
  "success": true,
  "message": "Book deleted successfully",
  "data": {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 1200
  }
}
```

---

# Testing the API

You can test the API using:

* **Browser** → for GET requests
* **Thunder Client (VS Code Extension)** → for GET, POST, PUT, DELETE
* **Postman** → optional

---

## Testing in Thunder Client

### GET all books

* Method: `GET`
* URL: `http://localhost:3000/api/books`

### GET single book

* Method: `GET`
* URL: `http://localhost:3000/api/books/1`

### POST new book

* Method: `POST`
* URL: `http://localhost:3000/api/books`
* Body (JSON):

```json
{
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki",
  "price": 1800
}
```

### PUT update book

* Method: `PUT`
* URL: `http://localhost:3000/api/books/2`
* Body (JSON):

```json
{
  "title": "Atomic Habits Updated",
  "author": "James Clear",
  "price": 1700
}
```

### DELETE book

* Method: `DELETE`
* URL: `http://localhost:3000/api/books/1`

---

# Example Data File

The project currently uses a local array in `data/books.js` instead of a database.

```js
const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 1200
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 1500
  }
];

module.exports = books;
```

---

# Notes

* This project uses an **in-memory array**, so data will reset when the server restarts.
* It is built for learning **Express Routing**, **Controllers**, and **CRUD APIs**.
* A database like **MongoDB** can be added later for permanent data storage.

---

# Learning Outcomes

By completing this project, you will understand:

* How to create routes in Express.js
* How controllers separate logic from routes
* How CRUD APIs work
* How to test APIs using Thunder Client or Postman
* How to structure a basic Express project

---

# Author

**Tahreem Asif**
Computer Science Student


Agar chahiye to bas bolo: **:contentReference[oaicite:7]{index=7}**
```
