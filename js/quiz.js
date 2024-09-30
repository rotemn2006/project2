// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin git@github.com:rotemn2006/project2.git
// git push -u origin main

let numberOfQuestion=0;
let quesion= document.getElementById("question");
let answerOne=document.getElementById("answer1");
let answerTwo=document.getElementById("answer2");
let answerThree=document.getElementById("answer3");
let sum=0;

displayQuestion();



let pickedAnswer= document.getElementsByClassName("answer");

// for(i=0; i<pickedAnswer.length; i++){

answerOne.addEventListener("click",displayQuestion);
answerTwo.addEventListener("click",displayQuestion );
answerThree.addEventListener("click",displayQuestion );

// pickedAnswer[i].addEventListener("click",displayQuestion);
console.log(pickedAnswer);






function displayQuestion( ){
    // if(numberOfQuestion>quiz.length){
    //     showResults(); 
    // }
    // else{
    question.textContent= quiz[numberOfQuestion].ques;
    answerOne.textContent= quiz[numberOfQuestion].answer[0].ans;
    answerTwo.textContent= quiz[numberOfQuestion].answer[1].ans;
    answerThree.textContent= quiz[numberOfQuestion].answer[2].ans;
    numberOfQuestion++;

    }


function updateScore(event){
// if(event?.target===13)

}
    



function showResults(){
// let result=document.getElementsByTagName(footer);
// result[0].textContent="yay!" ;
}


