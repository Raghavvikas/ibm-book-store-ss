const express = require("express");
const jwt = require("jsonwebtoken");
const users = [
  {
    "username": "john123",
    "password": "mypassword"
  },
  {
    "username": "raghav",
    "password": "raghav"
  }
    
];
const books = require("./booksdb.js");

const authenticated = express.Router();

const isValid = (username) => {
  return !users.some(user => user.username === username);
};

const authenticatedUser = (username, password) => {
  return users.find(user => user.username === username && user.password === password);
};

// Task 6: Register
authenticated.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Username and password required" });

  if (!isValid(username)) return res.status(409).json({ message: "User already exists" });

  users.push({ username, password });
  res.json({ message: "User registered successfully" });
});

// Task 7: Login
authenticated.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = authenticatedUser(username, password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = jwt.sign({ username }, "access", { expiresIn: "1h" });

  req.session.authorization = { accessToken };
  res.json({ message: "Login successful" });
});

// Task 8: Add/Modify review
authenticated.put("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params;
  const { review } = req.body;
  const username = req.user.username;

  if (!books[isbn]) return res.status(404).json({ message: "Book not found" });

  books[isbn].reviews[username] = review;
  res.json({ message: "Review updated successfully" });
});

// Task 9: Delete review
authenticated.delete("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params;
  const username = req.user.username;

  if (!books[isbn]?.reviews[username]) return res.status(404).json({ message: "Review not found for this user" });

  delete books[isbn].reviews[username];
  res.json({ message: "Review deleted successfully" });
});

module.exports.authenticated = authenticated;
