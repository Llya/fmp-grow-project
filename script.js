var restaurants = ["Franco's", "Homeslice","Nando's","McDonald's","Pret","Bottega","Flat Iron"]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function triggerWheel(element) {
    console.log(getRandomInt(restaurants.length));
    console.log(element.className)
    element.className.hidden = true;
}
