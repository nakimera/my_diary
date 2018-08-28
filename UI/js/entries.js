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
                    if (data['message'] == 'You have no entries yet!'){
                        // window.alert(data['message']);
                        document.getElementById('entries').innerHTML=data['message'];
                    }
                    else {
                        var myEntries = data['data'];
                        console.log(myEntries);
                        for (x in myEntries) {
                            document.getElementById('entries').innerHTML += myEntries[x].title 
                            + myEntries[x].entry_date 
                            + "<br><hr>";
                        }
                    }
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

