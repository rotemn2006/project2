const submitButton = document.querySelector('button');
let users = JSON.parse(localStorage.getItem("users"));

submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let enterdUserName = document.getElementById('userName').value;
    let enterdPassword = parseInt(document.getElementById('password').value);

    let doseUserNameExist = [false,null];
    for (let i = 0; i < users.length; i++) {
        console.log('enterdUserName: ', enterdUserName);
        console.log('users[i]: ', users[i]);
        if (enterdUserName === users[i].userName) {
            doseUserNameExist = [true,i];
        }
    }
    if (doseUserNameExist[0]=== true){
        if(enterdPassword === parseInt(users[doseUserNameExist[1]].password)){
            console.log( enterdPassword);
            alert(`welcome to GameLand ${enterdUserName}`);
            linkToGamePage();
            localStorage.setItem('currentUser',JSON.stringify(users[doseUserNameExist[1]]))
        }else{
            alert('password is invaled');
        }
    }else{
        alert("user name dosen't exist");
    }
});

//submitButton.addEventListener('click',linkToGamePage)
function linkToGamePage(){
    location.href="./html/games.html";
}

console.log(users);