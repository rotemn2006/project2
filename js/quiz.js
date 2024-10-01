
//variables
let numberOfQuestion=0;
let quesion= document.getElementById("question");
let answerOne=document.getElementById("answer1");
let answerTwo=document.getElementById("answer2");
let answerThree=document.getElementById("answer3");
let sum=0;

displayQuestion();

//putting onClick on each answer
answerOne.addEventListener("click",(event)=>updateScore(1));
answerTwo.addEventListener("click",(event)=>updateScore(3));
answerThree.addEventListener("click",(event)=>updateScore(5));


//Apdate score
function updateScore(score){
    if(parseInt(numberOfQuestion)< parseInt(quiz.length)){
        sum = sum+score;
        console.log(sum); 
        displayQuestion();
    }
    else{
       showResults();
    }
}
   

//Passing question
function displayQuestion( ){
    console.log(numberOfQuestion);
    question.textContent= quiz[numberOfQuestion].ques;
    answerOne.textContent= quiz[numberOfQuestion].answer[0].ans;
    answerTwo.textContent= quiz[numberOfQuestion].answer[1].ans;
    answerThree.textContent= quiz[numberOfQuestion].answer[2].ans;
    numberOfQuestion++;
}

//Show result
function showResults(){  
    document.querySelector("main").style.display="none";
    console.log("hi!");
    let result= document.getElementById("footer");
    let princessImg= document.createElement("img");
    let imgContainer= document.getElementsByTagName("footer");
    let playAgain= document.getElementById("playAgain");

    imgContainer[0].appendChild(princessImg);

//checking which princess are you
    if(sum>=4 && sum<9){
        result.textContent="You are Raponzel!";
        princessImg.src="../imgs/raponzel.jpg";
    }
    else if(sum>9 && sum<14){
        result.textContent="You are Snow White!";
        princessImg.src="../imgs/snowhite.jpg";
    }
    else{
        result.textContent="You are Ariel!" ;
        princessImg.src="../imgs/ariel.jpeg";
    }
    playAgain.textContent="play again";
   
}



