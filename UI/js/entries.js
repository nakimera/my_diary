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
                            let entryId = myEntries[x].entry_id;

                            document.getElementById('list').innerHTML += 
                            "<div class='details-card' onclick=viewEntry("+ entryId +")>" 
                            + "<h3>" + title + "</h3><hr>"
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
    window.localStorage.setItem('entryId', entryId); 

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

                    document.getElementById('list').innerHTML = "<div> <h2 id='title'>" + title + "</h2>"
                    + "<i class='fa fa-pencil' onclick='modifyEntry()'></i><hr>"
                    + "<p id = 'details'>" + details + "</p>" 
                    + "</div>"
                    ; 
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
function modifyEntry() {

    let title = document.getElementById('title').innerHTML;
    let details = document.getElementById('details').innerHTML;

    document.getElementById('list').innerHTML = 
    "<div class='entry center'>" 
    + "<input type='text' class='input-title' placeholder='Enter new title ...' id='title'>"
    + "<textarea id='details'>" + details
    + "</textarea>"
    + "<button class='btn-logout btn-save' type='button' onclick='saveChanges()'>Save</button>"
    + "</div>";

}

// function to save changes to an entry
function saveChanges () {

    let entryId = window.localStorage.getItem('entryId'); 
    let title = document.getElementById('title').value;
    let details = document.getElementById('details').value;

    let entry = {
        title: title,
        details: details
    }

    fetch(host + '/api/v1/entries/' + entryId,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'access-token':  token
        },
        mode: 'cors',
        body: JSON.stringify(entry)
    })
    .then(
        response => {

            if (response.status !=200) {
                result = response.json();
                result.then(data => {
                    alert(data['message']);
                });
            }

            else {
                result = response.json();
                result.then(data => {
                    window.alert(data['message']);
                    viewEntry(entryId);
                });
            }
        }
    )
    
    .catch(
        function(error) {
            console.log('Request failed', error);
            alert('Ooops! Server down. Please try again later');
        }
    )
    
}