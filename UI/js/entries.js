function viewEntries() {
    let token = window.localStorage.getItem('access-token');

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
                    alert(data['message']);
                });
            }

            else {
                result = response.json();
                result.then(function(data) {
                    if (data['message'] == 'You have no entries yet!'){
                        document.getElementById('entries').innerHTML=data['message'];
                    }
                    else {
                        let myEntries = data['data'];
                        for (x in myEntries) {
                            let myDate = myEntries[x].entry_date;
                            let title = myEntries[x].title;
                            let details = myEntries[x].details ;
                            let entryID = myEntries[x].entry_id;

                            document.getElementById('list').innerHTML += 
                            "<div class='details-card' onclick=viewEntry("+ entryID +")>" 
                            + title
                            +'<br>' 
                            + myDate + '<br>'
                            + details 
                            + "</div>";
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


function viewEntry(entryId) {
    let token = window.localStorage.getItem('access-token');

    fetch(host + '/api/v1/entries/' + entryId, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'access-token':  token
        },
        mode: 'cors'
    })

    .then(
        response => {
            if (response.status !=200) {
                let result = response.json();
                result.then(function(data) {
                    document.getElementById('list').innerHTML=data['message'];
                });
            }

            else {
                result = response.json();
                result.then(function(data) {
                    console.log(data);
                    var myEntry = data['data'];
                    var title = myEntry.title;
                    var details = myEntry.details;

                    document.getElementById('list').innerHTML = "<div> <h1>" + title + "</h1>"
                    + "<br>" 
                    + details + "</div>"; 
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

