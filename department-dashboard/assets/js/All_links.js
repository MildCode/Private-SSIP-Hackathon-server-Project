document.getElementById('login-form').addEventListener('click', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const department = document.getElementById('department').value;
    const role = document.getElementById('role').value;
    console.log(username, password, department, role);
    
    if (username === 'admin' && password === 'admin' && department === 'admin' && role === 'admin') {
        window.location.href = 'dashboard.html';
    }
});