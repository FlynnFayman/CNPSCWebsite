const joinForm = document.getElementById('joinForm');

joinForm.addEventListener('submit', function(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())
    console.log(data)

    if(!data.name || data.name.trim().length < 2){
        alert('Please enter a valid name')
        return;
    }

    
    if (!/^\d{10}$/.test(data.phone)) {
        alert('Please enter a 10-digit phone number.');
        return;
    }

    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // (Optional) city/address/license validation
    if (!data.city || data.city.trim().length < 2) {
        alert('City field is required.');
        return;
    }

    if (!data.zip || data.zip.trim().length != 5){
        alert("Please enter a vaild zip code")
    }

    fetch("http://localhost:8080/api/v1/applys/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => {
        alert("Thanks! Your submission was received.")
        joinForm.reset()
    })

    console.log('Validated data:', data);
})