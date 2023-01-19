const greeting = document.querySelector('.greeting');

window.onload = () => {
    if(!sessionStorage.username){
        location.href = '/login';
    } else{
        greeting.innerHTML = `hello ${sessionStorage.username}`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}