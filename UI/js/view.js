function viewEntry() {
    var token = window.localStorage.getItem('access-token');
    var entryId = window.localStorage.getItem('entryId')

    fetch(host + '/api/v1/entries/' + 7, 
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
                    document.getElementById('entry').innerHTML=data['message'];
                });
            }

            else {
                result = response.json();
                result.then(function(data) {
                    console.log(data);
                    var myEntry = data['data'];
                    var title = myEntry.title;
                    var details = myEntry.details;

                    document.getElementById('entry').innerHTML= "<h1>" + title + "</h1>"
                    + "<br>" 
                    + "<div class='div-details'>" + details + "</div>"; 
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

