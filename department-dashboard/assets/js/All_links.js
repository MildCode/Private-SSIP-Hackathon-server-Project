document.getElementById('btn-submit').addEventListener('click', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const department = document.getElementById('department').value;
    const role = document.getElementById('role').value;
    console.log(username, password, department, role);
    
    if (role === 'hod') {
        fetch('https://hod-api-2.vercel.app/api/hods')
            .then(response => response.json())
            .then(data => {
                const hod = data.find(hod => hod.name === username && hod.password === password && hod.department === department);
                if (hod) {
                    console.log(hod);
                    // if () {
                    //     // localStorage.setItem('hod', JSON.stringify(hod));
                    //     document.location.assign('/hod.html');
                       
                    // }else {
                    //     alert('HOD not found or credentials do not match');
                    // }
                    // document.location.assign('/hod.html');
                } else {
                    alert('HOD not found or credentials do not match');
                }   
            })
            .catch(error => console.error('Error:', error));
    } else if (username === 'admin' && password === 'admin' && department === 'admin' && role === 'admin') {
        document.location.assign('/dashboard.html');
    }
});