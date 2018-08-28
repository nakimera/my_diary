function viewEntry() {
    var token = window.localStorage.getItem('access-token');

    fetch(host + '/api/v1/entries/' + 10, 
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
                    // alert(data['message']);
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

                    document.getElementById('entry').innerHTML= title + "<br>" + details; 
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

