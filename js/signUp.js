const submitButton = document.querySelector('button');
submitButton.addEventListener('click', addNewUser);

const user = {}
let userName = document.getElementById('userName')
let password = document.getElementById('password')
let verfiyPassword = document.getElementById('verfiyPassword')
let email = document.getElementById('email')
let phoneNumber = document.getElementById('phoneNumber')
let age = document.getElementById('age')

// let key = ['userName', 'password', 'email', 'phoneNumber', 'age']
function addNewUser() {
    // for (let i = 0; i < key.length; i++) {
    //     let e;
    //     e = document.getElementById(key[i]);
    //     user.e = e.value;
    //     console.log('user.e: ', user.e);
    //     console.log('e.value: ', e.value);

    // }
    user.userName=userName.value;
    user.password=password.value;
    user.verfiyPassword=verfiyPassword.value;
    user.email=email.value;
    user.phoneNumber=phoneNumber.value;
    user.age=age.value;
    console.log("use ", user);
}
addNewUser();