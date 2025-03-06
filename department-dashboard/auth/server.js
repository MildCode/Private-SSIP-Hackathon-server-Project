const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

// Middleware for session management
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/auth/login'); // Redirect to login if not authenticated
    }
    next();
}

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Authentication Routes
const authRoutes = require('./auth/auth');
app.use('/auth', authRoutes);

// Protect department dashboard routes (user must be logged in)
app.use('/department-dashboard', isAuthenticated, express.static(path.join(__dirname, 'department-dashboard')));

// Start the server
app.listen(5500, () => {
    console.log('Server running on http://127.0.0.1:5500');
});
