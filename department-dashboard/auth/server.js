const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname))); // Serve static files from the 'auth' folder

// Fake Users (Replace with Database in Real Projects)
const users = [
    { username: 'admin', password: 'password', department: 'health' },
    { username: 'user1', password: '12345', department: 'education' }
];

// Login Route
app.post('/login', (req, res) => {
    const { username, password, department } = req.body;

    console.log("Received Login Request:", req.body);

    // Check if user exists
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        console.log("Login Successful for:", username);
        res.json({ success: true, redirect: `/department-dashboard/${department}` });
    } else {
        console.log("Login Failed for:", username);
        res.json({ success: false, message: 'Invalid Credentials!' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/login.html`);
});
