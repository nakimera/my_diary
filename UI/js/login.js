function loginUser() {
    email_address = document.getElementById('email').value;
    password = document.getElementById('password').value;

    user = {
        email_address: email_address,
        password: password
    }

    fetch('http://127.0.0.1:5000/api/v1/auth/login', 
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify(user)
    })

    .then(
        function(response) {

            result = response.json();
            result.then(function(data) {
            console.log(data);
            document.getElementById('message').innerHTML=data['message'];
            
            });

            if (response.status == 200) {
                // window.alert("Welcome")
            }
        }
    )
}

