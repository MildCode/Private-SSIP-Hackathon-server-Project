document.getElementById('btn-submit').addEventListener('click', function(e) {
    // e.preventDefault();
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
                    // console.log(hod);
                    if(department === 'Ministry_of_Home_and_Affriars') {
                        document.location.assign('department-dashboard/ALL_HODS//Ministry_of_Home_and_Affriars_HOD.html');
                    }else if(department === 'Ministry_of_health') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_Health_HOD.html');
                    }else if(department === 'Ministry_of_education') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_Education_HOD.html');
                    }else if(department === 'Ministry_of_defence') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_Defence_HOD.html');
                    }else if(department === 'Ministry_of_finance') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_Finance_HOD.html');
                    }else if(department ==='Ministry_of_labour') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_labour_HOD.html');
                    }else if(department ==='Ministry_of_it_&_electronics') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_it_&_electronics_HOD.html');
                    }else if(department ==='Ministry_of_transport') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_transport_HOD.html');
                    }else if(department ==='Ministry_of_rural_development') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_rural_development_HOD.html');
                    }else if(department ==='Ministry_of_agriculture') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_agriculture_HOD.html');
                    }else{
                        alert('HOD Department not found');
                    }
                } else {
                    alert('HOD not found or credentials do not match');
                }   
            })
            .catch(error => console.error('Error:', error));
    } else if (username === 'admin' && password === 'admin' && department === 'admin' && role === 'admin') {
        document.location.assign('/dashboard.html');
    }
});