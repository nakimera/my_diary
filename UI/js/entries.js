let token = window.localStorage.getItem('access-token'); 


// function to view all entries
function viewEntries() {

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
        response => {
            if (response.status !=200) {
                result = response.json();
                result.then (data => {
                    alert(data['message']);
                });
            }

            else {
                result = response.json();
                result.then(data => {
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
    
    .catch(error => {
            console.log('Request failed', error);
            alert('Ooops! Server down. Please try again later');
        }
    )
}

// view single entry
function viewEntry(entryId) {

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
                result.then(data => {
                    document.getElementById('list').innerHTML=data['message'];
                });
            }

            else {
                result = response.json();
                result.then(data => {
                    console.log(data);
                    var myEntry = data['data'];
                    var title = myEntry.title;
                    var details = myEntry.details;

                    document.getElementById('list').innerHTML = "<div> <h1>" + title + "</h1>"
                    + "<br>" 
                    + details + "</div>"
                    + "<i class='fa fa-pencil' onclick='modifyEntry()'></i>"; 
                });
            }
        }
    )
    
    .catch(error => {
            console.log('Request failed', error);
            alert('Ooops! Server down. Please try again later');
        }
    )
}

// function to modify an entry
function modifyEntry(entryId) {

    fetch(host + '/api/v1/entries/' + entryId,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'access-token':  token
        },
        mode: 'cors'
    })

    .then(
        response => {
            
            window.location.href = '../UI/entry.html';
            // if (response.status !=200) {
            //     let result = response.json();
            //     result.then(data => {
            //         document.getElementById('list').innerHTML=data['message'];
            //     });
            // }

            // else {
            //     result = response.json();
            //     result.then(data => {
            //         console.log(data);
            //         var myEntry = data['data'];
            //         var title = myEntry.title;
            //         var details = myEntry.details;

            //         document.getElementById('list').innerHTML = "<div> <h1>" + title + "</h1>"
            //         + "<br>" 
            //         + details + "</div>"; 
            //     });
            // }
        }
    )

    .catch(error => {
            alert('Ooops! Server down. Please try again later');
        }
    )
}