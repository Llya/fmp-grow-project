//DISPLAYING LIST OF RESTAURANTS
function displayList(item, listId) {
    var list = document.getElementById(listId);
    var list_display = "";
    for (var i = 0; i < item.length; i++) {
        list_display += "<li>" + item[i].name + "</li>";
    }
    list.innerHTML = list_display;
}

//TAKING INTO ACCOUNT FILTERS SELECTED
var location_filter = document.getElementById("location");

location_filter.addEventListener("change", function () {
    var filtered_list = [];
    if (document.getElementById("location-1").checked) {
        //CHECK EACH VALUE FOR MATCH
        for (var i = 0; i < restaurants.length; i++) {
            if (restaurants[i].location === 1) {
                //CHECK VALUE ISN'T ALREADY IN LIST
                var matches = 0;
                for (var ii = 0; ii < filtered_list.length; ii++) {
                    if (filtered_list[ii].name === restaurants[i].name) {
                        matches = 1;
                        break;
                    }
                }
                if (matches !== 1) {
                    filtered_list.push(restaurants[i])
                }
            }
        }
    } else if (document.getElementById("location-2").checked) {
        for (var i = 0; i < restaurants.length; i++) {
            if (restaurants[i].location <= 2) {
                //CHECK VALUE ISN'T ALREADY IN LIST
                var matches = 0;
                for (var ii = 0; ii < filtered_list.length; ii++) {
                    if (filtered_list[ii].name === restaurants[i].name) {
                        matches = 1;
                        break;
                    }
                }
                if (matches !== 1) {
                    filtered_list.push(restaurants[i])
                }
            }
        }
    }
    displayList(filtered_list, "restaurantList")
})


//GENERATING RESTAURANT OPTIONS
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
        restaurants.splice(result, 1);

        //change button text
        trigger.innerHTML = "Not happy? Try again.";
        trigger.style.fontSize = "15px";

    } else {
        var wheel = document.getElementById("wheel");
        var limit = document.getElementById("limit");
        wheel.style.display = "none";
        limit.style.display = "block";
        displayList(options, "optionsList");
    }
})