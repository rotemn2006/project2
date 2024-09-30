const submitButton = document.querySelector('button');
submitButton.addEventListener('click', checkIfValid);

let userName = document.getElementById('userName')
let password = document.getElementById('password')
let email = document.getElementById('email')
let phoneNumber = document.getElementById('phoneNumber')
let age = document.getElementById('age')

function checkIfValid() {
    if (userName.value !== '' && password.value !== '') {
        createNewUser()
    } else {
        alert('You must fill user name and password first')
    }
}



// let key = ['userName', 'password', 'email', 'phoneNumber', 'age']
function createNewUser() {
    // for (let i = 0; i < key.length; i++) {
    //     let e;
    //     e = document.getElementById(key[i]);
    //     user.e = e.value;
    //     console.log('user.e: ', user.e);
    //     console.log('e.value: ', e.value);

    // }
    let user = {}
    user.userName = userName.value;
    user.password = password.value;
    user.email = email.value;
    user.phoneNumber = phoneNumber.value;
    user.age = age.value;
    // console.log('user: ', user);
    addNewUser(user);
}

let users = JSON.parse(localStorage.getItem("users"))
function addNewUser(user) {
    if (users === null) {
        localStorage.setItem("users", JSON.stringify([user]))
    } else {
        localStorage.setItem("users", JSON.stringify([...users, user]))
    }
    localStorage.setItem('currentUser', JSON.stringify(user))
    alert(`welcome to GameLand ${user.userName}`);
    linkToGamePage()
}


function linkToGamePage() {
    location.href = "../html/games.html";
}
console.log(JSON.parse(localStorage.getItem('users')));