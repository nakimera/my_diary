// function addEntry() {
//     // document.getElementById('action').innerHTML  
//     // = "<button class='btn-logout btn-save' type='button'>" + + Done + "</button>" ;

//     let title = document.getElementById('title').value;
//     let details = document.getElementById('details').value;
//     let token = window.localStorage.getItem('access-token');

//     let entry = {
//         title: title,
//         details: details
//     }

//     fetch(host + '/api/v1/entries', 
//     {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'access-token':  token
//         },
//         mode: 'cors',
//         body: JSON.stringify(entry)
//     })

//     .then(

//         response => {

//             if (response.status !=201) {
//                 result = response.json();
//                 result.then(data => {
//                     alert(data['message'])
//                 });
//             }

//             else {
//                 result = response.json();
//                 result.then(data => {
//                     window.alert(data['message']);
//                     window.location.href = '../UI/home.html';
//                 });
//             }
//         }
//     )
    
//     .catch(
//         function(error) {
//             console.log('Request failed', error);
//             alert('Ooops! Server down. Please try again later');
//         }
//     )
// }

