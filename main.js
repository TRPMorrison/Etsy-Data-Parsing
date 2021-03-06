var answer1 = document.querySelector('#answer1');

answer1.innerText = '';

items.forEach(function(item) {
    answer1.appendChild(document.createTextNode(item.price + '\n'));
});



// <div class="question">
//       <h4>1. What is the average price of all items?</h4>
//       <pre id="answer1">Answer 1 Goes Here</pre>
//     </div>
var allPrices = items.map(function(item) {
    return item.price;
});


var sum = allPrices.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
});

var average = sum / allPrices.length;

var answer = average.toFixed(2);

var answer1 = document.querySelector('#answer1').textContent = "The average price is $" + answer;


//     <div class="question">
//       <h4>2. Show me an array of items that cost between $14.00 and $18.00 USD?</h4>
//       <pre id="answer2">Answer 2 Goes Here</pre>
//     </div>

var answer2 = document.querySelector('#answer2');

answer2.innerText = '';

items.forEach(function(item) {
    answer2.appendChild(document.createTextNode(item.price + item.title + '\n'));
});

var newItems = items.filter(function(item) {
    return (item.price >= 14 && item.price <= 18);
});

newItems[0].title

var answer = newItems[0].title + " " + newItems[0].price + '\n';

// document.querySelector('#answer2').textContent = answer;


//     <div class="question">
//       <h4>3. Which item has a "GBP" currency code? Display it's name and price.</h4>
//       <pre id="answer3">Answer 3 Goes Here</pre>
//     </div>
var answer3 = document.querySelector('#answer3');

answer3.innerText = '';

items.forEach(function(item) {
    answer3.appendChild(document.createTextNode(item.currency_code + item.title + item.price + '\n'));
});


var newItems = items.filter(function(item) {
    return item.currency_code === "GBP";
});

newItems[0].price;

var answer3 = newItems[0].title + " £" + newItems[0].price;

document.querySelector('#answer3').textContent = answer3;

console.log(answer3);

//     <div class="question">
//       <h4>4. Display a list of all items who are made of wood.</h4>
//       <pre id="answer4">Answer 4 Goes Here</pre>
//     </div>

var answer4 = document.querySelector('#answer4');

answer4.innerText = '';

items.forEach(function(item) {
    answer4.appendChild(document.createTextNode(item.materials + '\n'));
});
var woodMaterials = items.filter(function(item) {
    return item.materials = wood;
});

var wood = items.filter(function(item) {
    return item.materials === "wood";
});
// var allWood = items.map(function(item) {
//     return item.materials + item.title + '\n';
// });

// function filter(item) {
//     if (item.materials === "wood") {
//         console.log('item.title');
//     } else {
//         console.log('False');
//     }
// };

// var answer = ;

// document.querySelector('#answer4').textContent = answer + " is made out of wood.";

//     <div class="question">
//       <h4>5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.</h4>
//       <pre id="answer5">Answer 5 Goes Here</pre>
//     </div>

var answer5 = document.querySelector('#answer5');

answer5.innerText = '';

items.forEach(function(item) {
    answer5.appendChild(document.createTextNode(item.materials + '\n'));
});




var answer5 =

    document.querySelector('#answer5').textContent = "INSERT ANSWER HERE" + answer5;

//     <div class="question">
//       <h4>6. How many items were made by their sellers?</h4>
//       <pre id="answer6">Answer 6 Goes Here</pre>
//     </div>
var answer6 = document.querySelector('#answer6');

answer6.innerText = '';

items.forEach(function(item) {
    answer6.appendChild(document.createTextNode(item.who_made + '\n'));
});

var sellersItems = items.filter(function(item) {
    return item.who_made === "i_did";
});

var sellersMade = [sellersItems];
console.log(sellersMade);

var answer = 18;

document.querySelector('#answer6').textContent = answer;
//   </div>
