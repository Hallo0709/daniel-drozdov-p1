var user = "Daniel";
var salutation = "Hello, ";
var greeting = salutation + user + '! Welcome to an Overview of Spark Trendz'
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 50,
    militaryDiscount = .30;
    militaryPrice = price - (price * militaryDiscount),
    priceEl = document.getElementById('price');
    militaryPriceEl = document.getElementById('military-price');

    priceEl.textContent = price.toFixed(2);
    militaryPriceEl.textContent = militaryPrice.toFixed(2);