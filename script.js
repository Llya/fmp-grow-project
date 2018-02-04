/*
remove onclick and use event listener
use display: none instead of visibility: hidden
use 1 button instead of 2 (change the text instead of hiding it)
don't return same restaurant twice 
*/

var restaurants = ["Franco's", "Homeslice", "Nando's", "McDonald's", "Pret", "Bottega", "Flat Iron", "Blue's Kitchen", "The Diner"]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var trigger = document.getElementById("trigger");

trigger.addEventListener("click", function () {
    //get a number at random
    var result = getRandomInt(restaurants.length);
    //get answer text
    var answer = document.getElementById("restaurant");
    //update text and display
    answer.innerHTML = restaurants[result];
    answer.style.display = "block";
    //change button text
    trigger.innerHTML = "Not happy? Try again."
    trigger.style.fontSize ="15px"
})