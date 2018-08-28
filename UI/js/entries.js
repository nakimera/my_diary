function viewEntries() {
    var token = window.localStorage.getItem('access-token');

    fetch(host + '/api/v1/entries', 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'access-token':  token
        },
        mode: 'cors'
    })

    .then(
        function(response) {

            if (response.status !=200) {
                result = response.json();
                result.then(function(data) {
                    alert(data['message'])
                });
            }

            else {
                result = response.json();
                result.then(function(data) {
                    // window.alert(data['message']);
                    console.log(data)
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

