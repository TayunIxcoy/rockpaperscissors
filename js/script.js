
//GLOBAL VARIABLES
/* global $ */
let userInput="nothing";
let comChoice="nothing";
let randomNumber=0;

// DOCUMENT READY FUNCTION BELOW


$("#shoot").click(function() {
    userInput= $("#input").val();
    console.log(userInput + ' <-- uuserinput')
    $("#userChoice").text(userInput);
    randomNumber=Math.random()
    if (randomNumber<.33) {
        comChoice="paper";

    } else if (randomNumber<.66){
        comChoice="rock";
    }
    else if (randomNumber<1.0 ) {
        comChoice="scisors";
    }
     $("#computerChoice").text(comChoice);
    //if human beats computer then human wins//

    console.log();
    if ((comChoice==="rock" && userInput==="paper")
        || (comChoice==="rock" && userInput==="paper") {
    console.log('Userwins')
    }

 });
