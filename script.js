function displayList(item, listId) {
    var list = document.getElementById(listId);
    var list_display="";
    for (var i = 0; i < item.length; i++) {
        list_display += "<li>" + item[i].name + "</li>";
    }
    list.innerHTML = list_display;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var trigger = document.getElementById("trigger");
var options = [];

trigger.addEventListener("click", function () {

    if (options.length < 3) {
    //get a number at random
    var result = getRandomInt(restaurants.length);
    
    //update text and display
    var answer = document.getElementById("restaurant");
    answer.innerHTML = restaurants[result].name;
    answer.style.display = "block";

    //store result
    options.push(restaurants[result]);

    //remove result from array
    restaurants.splice(result,1);

    //change button text
    trigger.innerHTML = "Not happy? Try again.";
    trigger.style.fontSize ="15px";

    } else {
    var wheel = document.getElementById("wheel");
    var limit = document.getElementById("limit");
    wheel.style.display = "none";
    limit.style.display = "block";
    displayList(options, "optionsList");
    }
})