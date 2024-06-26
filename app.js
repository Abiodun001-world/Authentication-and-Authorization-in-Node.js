// app.js
const express = require('express');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs")

// Custom error 404 page

app.get("*", (req, res) => {
  res.render("404", {title:"404"})
});

// Parse JSON request bodies
app.use(express.json());

// API routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});