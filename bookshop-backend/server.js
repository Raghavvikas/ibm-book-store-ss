const express = require('express');
const app = express();
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');
const reviewRoutes = require('./routes/reviews');
app.use(express.json());

app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/reviews', reviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
