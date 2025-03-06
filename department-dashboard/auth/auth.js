const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

// Mock user credentials (Replace with database check)
const users = {
    admin: { password: "admin123", department: "finance" },
    user1: { password: "password1", department: "hr" }
};

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username].password === password) {
        req.session.user = { username, department: users[username].department };
        return res.redirect(`/department-dashboard/${users[username].department}`);
    } else {
        return res.send("Invalid username or password. <a href='/auth/login'>Try Again</a>");
    }
});

// Logout route
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth/login');
    });
});

module.exports = router;
