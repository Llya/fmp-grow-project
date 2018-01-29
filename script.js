var restaurants = ["Franco's", "Homeslice","Nando's","McDonald's","Inito","Flat Iron","Blue's Kitchen", "The Diner", "Sainsbury's", "The Chicken Place"]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function triggerWheel() {
    var trigger = document.getElementById ("trigger") ;
    var restaurant = document.getElementById ("restaurant") ;
    var result = getRandomInt(restaurants.length);
    var reload = document.getElementById ("reload") ;
    trigger.style.visibility = "hidden";
    restaurant.innerHTML = restaurants[result];
    restaurant.style.visibility = "visible";
    reload.style.visibility = "visible"

}

function triggerReload() {
    var restaurant = document.getElementById ("restaurant") ;
    var result = getRandomInt(restaurants.length);
    var reload = document.getElementById ("reload") ;
    restaurant.innerHTML = restaurants[result];
}