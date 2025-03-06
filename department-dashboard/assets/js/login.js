const express = require('express');
const path = require('path');
const router = express.Router();

// Serve login page
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html')); // Ensure this path is correct
});

// Handle login form submission (optional)
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple authentication logic (Replace with actual authentication)
    if (username === 'admin' && password === 'password') {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;
