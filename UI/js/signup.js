function registerUser() {
    username = document.getElementById('username').value;
    email_address = document.getElementById('email').value;
    password = document.getElementById('password').value;

    var user = {
        username: username,
        email_address: email_address,
        password: password
    }

    fetch(host + '/api/v1/auth/signup', 
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
                result = response.json();
                result.then(function(data) {
                    window.alert(data['message']);
                    window.location = '../UI/index.html';
                }); 
                
            }
            
        }
        
    )
    
    .catch(
        function(error) {
            console.log('Request failed', error);
            alert('Ooops! Request failed. Please try again later');
        }
    )
}

