
//GLOBAL VARIABLES
/* global $ */
let userInput="nothing";
let comChoice="nothing";
let randomNumber=0;

// DOCUMENT READY FUNCTION BELOW


$("#shoot").click(function() {
    userInput= $("#input").val();
    console.log(userInput + ' <-- uuserinput')
    $("#userChoice").append(userInput);
    randomNumber=Math.random()
    if (randomNumber<.33){
        comChoice="paper";

    } else if (randomNumber<.66){
        comChoice="rock";
    }
    else  (randomNumber<.99 ) {
        comChoice="scisors";
    }





 });
