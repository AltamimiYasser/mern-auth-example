const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

// app
const app = express();
app.use(express.json());

// mongoose
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  () => console.log('Connected to db')
);

// routes
app.use('/api/auth', require('./routes/auth'));

// production prep ALWAYS LAST
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
