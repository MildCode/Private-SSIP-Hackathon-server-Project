document.getElementById('btn-submit').addEventListener('click', function (e) {
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
                    if (department === 'Ministry_of_Home_and_Affriars') {
                        document.location.assign('department-dashboard/ALL_HODS//Ministry_of_Home_and_Affriars_HOD.html');
                    } else if (department === 'Ministry_of_health') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_Health_HOD.html');
                    } else if (department === 'Ministry_of_education') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_Education_HOD.html');
                    } else if (department === 'Ministry_of_defence') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_Defence_HOD.html');
                    } else if (department === 'Ministry_of_finance') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_Finance_HOD.html');
                    } else if (department === 'Ministry_of_labour') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_labour_HOD.html');
                    } else if (department === 'Ministry_of_it_&_electronics') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_it_&_electronics_HOD.html');
                    } else if (department === 'Ministry_of_transport') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_transport_HOD.html');
                    } else if (department === 'Ministry_of_rural_development') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_rural_development_HOD.html');
                    } else if (department === 'Ministry_of_agriculture') {
                        document.location.assign('/department-dashboard/ALL_HODS//Ministry_of_agriculture_HOD.html');
                    } else {
                        alert('HOD Department not found');
                    }
                } else {
                    alert('HOD not found or credentials do not match');
                }
            })
            .catch(error => console.error('Error:', error));
    } else if (username === 'admin' && password === 'admin' && department === 'admin' && role === 'admin') {
        document.location.assign('/dashboard.html');
    } else if (role === 'employee') {
        if (department === 'Ministry_of_Home_and_Affriars') {
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_A')
                .then(response => response.json())
                .then(data => {
                    const employee = data.employees.find(emp => emp.name === username && emp.password === password);
                    if (employee) {
                        document.location.assign('/department-dashboard/All_employees/Ministry_of_agriculture_EMP.html');

                        // alert('Employee not found or credentials do not match');
                    }else{
                        alert('Employee not found or credentials do not match');
                    }
                })
                .catch(error => alert(error));
        } else if (department === 'Ministry_of_finance') {
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_B')
                .then(response => response.json())
                .then(data => {
                    const employee = data.employees.find(emp => emp.name === username && emp.password === password);
                    if (employee) {
                        document.location.assign('/department-dashboard/All_employees/Ministry_of_Finance_EMP.html');

                        // alert('Employee not found or credentials do not match');
                    }else{
                        alert('Employee not found or credentials do not match');
                    }
                })
                .catch(error => alert(error));
        } else if (department === 'Ministry_of_education') {
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_C')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data) {
                        const employee = data.employees.find(emp => emp.name === username && emp.password === password);
                        if (employee) {
                            document.location.assign('/department-dashboard/All_employees/Ministry_of_Education_EMP.html');
                        } else {
                            alert('Employee not found or credentials do not match');
                        }
                    } else {
                        alert('No employees found for this department');
                    }
                })
                .catch(error => alert(error));
        }else if(department ==='Ministry_of_labour'){
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_D')
                .then(response => response.json())
                .then(data => {
                    const employee = data.employees.find(emp => emp.name === username && emp.password === password);
                    if (employee) {
                        document.location.assign('/department-dashboard/All_employees/Ministry_of_labour_EMP.html');

                        // alert('Employee not found or credentials do not match');
                    }else{
                        alert('Employee not found or credentials do not match');
                    }
                })
                .catch(error => alert(error));
    }else if (department ==='Ministry_of_it_&_electronics'){
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_E')
                .then(response => response.json())
                .then(data => {
                    const employee = data.employees.find(emp => emp.name === username && emp.password === password);
                    if (employee) {
                        document.location.assign('/department-dashboard/All_employees/Ministry_of_it_&_electronics_EMP.html');    

                        // alert('Employee not found or credentials do not match');
                    }else{
                        alert('Employee not found or credentials do not match');
                    }
                })
                .catch(error => alert(error));
        }else  if (department === 'Ministry_of_transport') {
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_F')
                .then(response => response.json())
                .then(data => {
                    const employee = data.employees.find(emp => emp.name === username && emp.password === password);
                    if (employee) {
                        document.location.assign('/department-dashboard/All_employees/Ministry_of_transport_EMP.html');

                        // alert('Employee not found or credentials do not match');
                    }else{
                        alert('Employee not found or credentials do not match');    
                    }
                })
                .catch(error => console.error('Error:', error));
        } else if (department === 'Ministry_of_rural_development') {
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_G')
                .then(response => response.json())
                .then(data => {
                    const employee = data.employees.find(emp => emp.name === username && emp.password === password);
                    if (employee) {
                        document.location.assign('/department-dashboard/All_employees/Ministry_of_rural_development_EMP.html');

                        // alert('Employee not found or credentials do not match');
                    }else{
                        alert('Employee not found or credentials do not match');
                    }
                })
                .catch(error => alert(error));
        } else if (department === 'Ministry_of_defence') {
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_H')
                .then(response => response.json())
                .then(data => {
                    const employee = data.employees.find(emp => emp.name === username && emp.password === password);
                    if (employee) {
                        document.location.assign('/department-dashboard/All_employees/Ministry_of_Defence_EMP.html');

                        // alert('Employee not found or credentials do not match');
                    }else{
                        alert('Employee not found or credentials do not match');
                    }
                })
                .catch(error =>( error));
        }else if(department ==='Ministry_of_health'){
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_I')
                .then(response => response.json())
                .then(data => {
                    const employee = data.employees.find(emp => emp.name === username && emp.password === password);
                    if (employee) {
                        document.location.assign('/department-dashboard/All_employees/Ministry_of_Health_EMP.html');

                        // alert('Employee not found or credentials do not match');
                    }else{
                        alert('Employee not found or credentials do not match');
                    }
                })
                .catch(error => alert(error));
    }else if (department ==='Ministry_of_agriculture'){
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_J')
                .then(response => response.json())
                .then(data => {
                    const employee = data.employees.find(emp => emp.name === username && emp.password === password);
                    if (employee) {
                        document.location.assign('/department-dashboard/All_employees//Ministry_of_agriculture_EMP.html');

                        // alert('Employee not found or credentials do not match');
                    }else{
                        alert('Employee not found or credentials do not match');
                    }
                })
                .catch(error => alert(error));
        }
    }else if(role === 'labour'){
        // alert('labour');
        if(department === 'Ministry_of_Home_and_Affriars'){
            fetch('https://hod-api-2.vercel.app/api/hods/HOD_A/employees/EMP_A20/workers')
                .then(response => response.json())
                .then(data => {
                    const worker = data.find(worker => worker.name === username && worker.password === password);
                    if (worker) {
                        document.location.assign('labour.html');
                    } else {
                        alert('Worker not found or credentials do not match');
                    }
                })
                .catch(error => alert(error));
        }
    }





});