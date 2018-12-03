// const host = 'http://127.0.0.1:5000'
const host = 'https://my-diary-app-np.herokuapp.com'

function logOut() {
    window.localStorage.clear();
    window.location.href = '../UI/index.html';
}