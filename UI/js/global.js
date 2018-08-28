const host = 'http://127.0.0.1:5000'

function logOut() {
    window.localStorage.clear();
    window.location.href = '../UI/index.html';
}