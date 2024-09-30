//variables
const submitButton = document.querySelector('button');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');  
const age = document.getElementById('age');

submitButton.addEventListener('click', checkIfValid);

//checking if the user put his details in the log in
function checkIfValid() {
    if (userName.value !== '' && password.value !== '') { //todo - think
        createNewUser();
    } else {
        alert('You must fill user name and password first');
    }
}



//creating a user
function createNewUser() {
    let user = {}
    user.userName = userName.value;
    user.password = password.value;
    user.email = email.value;
    user.phoneNumber = phoneNumber.value;
    user.age = age.value;

    addNewUser(user);
}


const users = JSON.parse(localStorage.getItem("users"));

//adding the user to the local storage
function addNewUser(user) {
    if (users === null) {
        localStorage.setItem("users", JSON.stringify([user]))
    }
    else {
        localStorage.setItem("users", JSON.stringify([...users, user]))
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    alert(`welcome to GameLand ${user.userName}`);
    linkToGamePage();
}

//moving to the game area
function linkToGamePage() {
    location.href = "../html/games.html";
}
