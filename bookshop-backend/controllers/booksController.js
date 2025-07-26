exports.getAllBooks = async (req, res) => {
    res.json({ message: "Fetched all books" });
};
exports.getBookByISBN = (req, res) => {
    res.json({ message: `Fetched book with ISBN: ${req.params.isbn}` });
};
exports.getBooksByAuthor = async (req, res) => {
    res.json({ message: `Books by author: ${req.params.author}` });
};
exports.getBooksByTitle = async (req, res) => {
    res.json({ message: `Books with title: ${req.params.title}` });
};
exports.getBookReview = async (req, res) => {
    res.json({ message: `Reviews for ISBN: ${req.params.isbn}` });
};
