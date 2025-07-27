const axios = require('axios');

// Task 10: Get all books using async callback
async function getAllBooks() {
  try {
    const res = await axios.get("http://localhost:3000/");
    console.log("All Books:\n", res.data);
  } catch (err) {
    console.error("Error fetching all books:", err.message);
  }
}

// Task 11: Get book by ISBN using Promises
function getBookByISBN(isbn) {
  axios.get(`http://localhost:3000/isbn/${isbn}`)
    .then(res => console.log(`Book (ISBN: ${isbn}):\n`, res.data))
    .catch(err => console.error("Error fetching book by ISBN:", err.message));
}

// Task 12: Get book by Author
async function getBookByAuthor(author) {
  try {
    const res = await axios.get(`http://localhost:3000/author/${encodeURIComponent(author)}`);
    console.log(`Books by ${author}:\n`, res.data);
  } catch (err) {
    console.error("Error fetching by author:", err.message);
  }
}

// Task 13: Get book by Title
async function getBookByTitle(title) {
  try {
    const res = await axios.get(`http://localhost:3000/title/${encodeURIComponent(title)}`);
    console.log(`Book with title "${title}":\n`, res.data);
  } catch (err) {
    console.error("Error fetching by title:", err.message);
  }
}

// Call the functions
getAllBooks();
getBookByISBN("9780007117116");
getBookByAuthor("Paulo Coelho");
getBookByTitle("The Alchemist");
