const express = require('express');
const app = express();
const session = require('express-session');
const bookRoutes = require('./router/booksdb');

const userRoutes = require('./router/auth_user').authenticated;
const general = require('./router/general').general;
app.use(express.json());
app.use("/customer",session({secret:"fingerprint_customer",resave: true, saveUninitialized: true}))

app.use("/customer/auth/*", function auth(req, res, next) {
  const token = req.session.authorization?.accessToken;

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, "access", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid" });
    }
    req.user = user;
    next();
  });
});

app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/', general);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
