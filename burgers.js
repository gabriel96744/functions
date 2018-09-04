var jrburger = {
meat: "beef",
vegetables:"lettuce",
cheese:"Mozzarella",
mayo: true,
mustard: false,
ketchup: true,
bbq: false,
pepper: true,
price: 7,
qty:1
}
var srburger = {
meat: "alligator",
vegetables:"lettuce",
cheese:"Mozzarella",
mayo: true,
mustard: false,
ketchup: true,
bbq: false,
pepper: true,
price: 15,
qty:1
}
var whatBurger = prompt("what burger do you want? jrburger or srburger")
var howMuch = prompt("how many do you want?");
window.alert("you are buying " + howMuch + whatBurger);
window.alert("the price will be " + howMuch * whatBurger.price);