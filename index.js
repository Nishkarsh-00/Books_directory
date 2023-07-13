const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(bodyParser.json());


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
