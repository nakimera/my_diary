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
                        // var myDate = myEntries[x].entry_date;
                        for (x in myEntries) {
                            var myDate = myEntries[x].entry_date;
                            var title = myEntries[x].title;
                            var details = myEntries[x].details ;

                            document.getElementById('entries').innerHTML += "<div>" + title + "</div>" 
                            + "<div>" + myDate + "</div>"
                            + "<div>" + details + "</div>"
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

