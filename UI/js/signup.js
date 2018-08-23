function registerUser() {
    username = document.getElementById('username').value;
    email_address = document.getElementById('email').value;
    password = document.getElementById('password').value;

    user = {
        username: username,
        email_address: email_address,
        password: password
    }

    fetch('http://127.0.0.1:5000/api/v1/auth/signup', 
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify(user)
    })
    // .then(response => {
    //     status_code  = response.status
    //     return response.json()
    // })
    
    .catch(error => alert(error))
}