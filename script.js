
var startBtn = document.createElement("button");
var crct = document.createElement("correctAnswers");
var incrct = document.createElement("incorrectAnswers");

startBtn.innerHTML = "Begin Quiz";
startBtn.onclick = function () {
        alert("Let's begin!");
        window.location.href = "question1.html";
};

document.body.appendChild(startBtn);


function crctans(){
    alert("That is correct!!");
    
    location.href="question2.html";

    };



 function incrctans(){
    alert("Sorry, that is incorrect. The correct answer is 'Creating an interactive, dynamic webpage.'");
        location.href="question2.html";
    
 };

 

function crctans2(){
    alert("That is correct!!");
    
    location.href="question3.html";

    };



 function incrctans2(){
    alert("Sorry, that is incorrect. The correct answer is 'Using the script method.'");
        location.href="question3.html";
    
 };



 function crctans3(){
    alert("That is correct!!");
    
    location.href="scoreboard.html";

    };



 function incrctans3(){
    alert("Sorry, that is incorrect. The correct answer is 'Modifying fonts and styles to make the page look visually appealing'");
        location.href="scoreboard.html";
    
 };




