//variables
const submitButton = document.querySelector('button');
const users = JSON.parse(localStorage.getItem("users"));


submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    const enterdUserName = document.getElementById('userName').value;
    const enterdPassword = parseInt(document.getElementById('password').value);
    let doesUserNameExist = [false,null];

    //checking if the details exist in the local storage
    for (let i = 0; i < users.length; i++) {
        if (enterdUserName === users[i].userName){
            doesUserNameExist = [true,i];
        }
    }

    if (doesUserNameExist[0]=== true){
        if(enterdPassword === parseInt(users[doesUserNameExist[1]].password)){
            console.log(enterdPassword);
            alert(`welcome to GameLand ${enterdUserName}`);
            linkToGamePage();
            localStorage.setItem('currentUser',JSON.stringify(users[doesUserNameExist[1]]));
        }
        else{
            alert('password is invaled');
        }
    }
    else{
        alert("user name dosen't exist");
    }
});

//move to the game area
function linkToGamePage(){
    location.href="./html/games.html";
}

