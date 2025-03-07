fetch('https://hod-api-2.vercel.app/api/hods')
    .then(response => response.json())
    .then(data => {
        const filteredHods = data.filter(hod => {
            const hodName = hod.name.toUpperCase();
            return hodName >= 'HOD_A' && hodName <= 'HOD_J';
        });
        console.log(filteredHods);
    })
    .catch(error => console.error('Error:', error));