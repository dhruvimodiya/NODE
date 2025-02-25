const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const itemRoutes = require('./router/itemRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/crudApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/items', itemRoutes);

// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
