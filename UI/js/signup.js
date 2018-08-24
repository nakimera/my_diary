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

    .then(
        function(response) {

            if (response.status !=201) {
                result = response.json();
            result.then(function(data) {
                document.getElementById('message').innerHTML=data['message'];
            });
            }

            else {
                window.location = '../UI/index.html';
            }
            
        }
        
    )
    .catch(
        function(error) {
            console.log('Request failed', error);
            alert('Ooops! Request failed. Please try again');
        }
    )
}

