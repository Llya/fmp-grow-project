//DISPLAYING LIST OF RESTAURANTS
function displayList(item, listId) {
    var list = document.getElementById(listId);
    var list_display = "";
    for (var i = 0; i < item.length; i++) {
        list_display += "<li>" + item[i].name + "</li>";
    }
    list.innerHTML = list_display;
}

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
        var filters = document.getElementById("filters");
        var limit = document.getElementById("limit");
        wheel.style.display = "none";
        filters.style.display = "none";
        limit.style.display = "block";
        displayList(options, "optionsList");
    }
})

 //listen for and store filter selection
var active_filters = {};
active_filters.location = [];
active_filters.price = [];
active_filters.diet = [];

var location_filter = document.getElementById("location");
//TO FIX: gets triggered when clicking outside the radio buttons and stores 'n'
location_filter.addEventListener("click", function (e) {
    //TO FIX: this will only work as long as there are less than 10 options - what's a more resilient option?
    active_filters.location = [e.target.id.slice(-1)];
    console.log(active_filters);
}); 

var price_filter = document.getElementById("price");
price_filter.addEventListener("click", function (e) {
    if(e.target.checked === true) {
        active_filters.price.push(e.target.value);
    } else if (e.target.checked === false) {
        active_filters.price.splice(active_filters.price.indexOf(e.target.id.slice(-1)),1);
    }
    console.log(active_filters);
}); 

var diet_filter = document.getElementById("diet");
diet_filter.addEventListener("click", function (e) {
    if(e.target.checked === true) {
        active_filters.diet.push(e.target.id);
    } else if (e.target.checked === false) {
        active_filters.diet.splice(active_filters.diet.indexOf(e.target.id),1);
    }
    console.log(active_filters);
}); 

/*NEXT STEPS

- put listener on filters div
- do check on name value (location/price/diet)
- return value field 
- try to avoid repetition within if statement

- look into ways of filtering list
- is object of arrays the best format?
*/
