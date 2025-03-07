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
                const hod = data.find(hod => hod.name === username);
                if (hod) {
                    console.log(hod);
                    if (hod.department === department) {
                        if(department ==="Ministry_of_Home_and_Affriars"){
                            document.location.assign('/dashboard.html');
                        }else if(department ==="Ministry_of_Finance"){
                            document.location.assign('/dashboard.html');
                        }else if(department ==="Ministry_of_Health"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Education"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Sports"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Agriculture"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Defence"){
                            document.location.assign('/dashboard.html');
                        }
                        
                        else if(department ==="Ministry_of_Transport"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Environment"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Tourism"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Labour"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Communication"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Water_Resources"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Solid_Minerals"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Youth_and_Sports"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Information"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Petroleum"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Aviation"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Science_and_Technology"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Land_and_Housing"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ==="Ministry_of_Justice"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department === "Ministry_of_Foreign_Affairs"){
                            document.location.assign('/dashboard.html');
                        }
                        else if(department ===
                            "Ministry_of_Industry_Trade_and_Investment"){
                            document.location.assign('/dashboard.html');
                        }
                    }else {
                        alert('HOD not found or credentials do not match');
                    }
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