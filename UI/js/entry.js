function addEntry() {
    title = document.getElementById('title').value;
    details = document.getElementById('details').value;
    var token = window.localStorage.getItem('access-token');

    var entry = {
        title: title,
        details: details
    }

    fetch(host + '/api/v1/entries', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'access-token':  token
        },
        mode: 'cors',
        body: JSON.stringify(entry)
    })

    .then(
        function(response) {

            if (response.status !=201) {
                result = response.json();
                result.then(function(data) {
                    alert(data['message'])
                });
            }

            else {
                result = response.json();
                result.then(function(data) {
                    window.alert(data['message']);
                    window.location.href = '../UI/entries.html';
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

