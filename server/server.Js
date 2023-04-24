const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

const questionsRouter = require('./routes/questions');
app.use('/api/questions', questionsRouter);



mongoose.connect('mongodb://localhost:27017/chatbotDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.log(error.message));
