const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'hello';

app.use(express.json());
app.use(session({
    secret: 'your_secret_key', // A secret key used to sign the session ID cookie
    resave: false, // Forces the session to be saved back to the session store
    saveUninitialized: false, // Forces a session that is "uninitialized" to be saved to the store
    cookie: {
      maxAge: 2 * 60 * 1000, // 2min
      sameSite: "lax",// lax,none,s
      secure: false, // true
      httpOnly: true,
    }
  }));
app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests from any origin
        callback(null, true);
      },
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true, // Allow sending cookies with the request
    })
  );



app.set('trust proxy', 1); // Trust the first proxy

  
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

app.get('/check-session', (req, res) => {
    if (req.session.user) {
      // If the session is set, return session info
      res.json({ session: true });
    } else {
      // If the session is not set, return no session
      res.json({ session: false });
    }
  });
  

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: 'Invalid user' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    req.session.user = { id: user._id, email: user.email }; // Save user session
    res.json({ token, message: 'Login Successful' });
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashPassword });
        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to log out' });
        }
        res.json({ message: 'Logout Successful' });
    });
});


app.post('/admin', async (req, res) => {
    const { email, password } = req.body;

    if (email === "admin" && password === "admin") {
        const token = jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    return res.status(400).json({ error: 'Invalid admin credentials' });
});

app.post('/admin/products', upload.single('image'), async (req, res) => {
    const { name, description, price, colors } = req.body;
    const image = req.file.path;

    try {
        const product = new Product({ name, description, price, colors: colors.split(','), image });
        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
