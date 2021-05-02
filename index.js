let ages = [3, 9, 23, 64, 2, 8, 28, 93, 40];
let lastAge = ages[ages.length - 1];
let firstAge = ages[0];

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var nameLengths = [];
var first = names[0];
var last = names[names.length-1];
var letters = 0;
for(var i = 0; i < names.length; i++)   {
    var currentLength = names[i].length;
    letters = letters + currentLength;
    nameLengths.push(currentLength);
} // question 5

for(var i = 0; i < names; i++)  {
    names += names;
}

var avg = letters / names.length; // question 1c
console.log(avg);  // question 2a
console.log(names); // question 2b
console.log(names[names.length - 1]); // question 3
console.log(names[0]); // question 4
console.log(nameLengths);  // question 6

function myFunc(word, n) {
    var concatenatedWord = '';
    for(var i = 0; i < n; i++) {
        concatenatedWord = concatenatedWord + word;
    }
    // console.log('Im running');
    return concatenatedWord;
}

var returnValue = myFunc('hello', 3);
console.log(returnValue); // question 7

function fullName(firstName, lastName)  {
    firstName = 'Justin';
    lastName = 'Carr';
    return firstName + ' ' + lastName;
}
console.log(fullName()); // question 8

let numArray = [1, 13, 21, 7, 43];
function numberFunction()   {
    for (let i = 0; i < numArray; i++)    {
        console.log(i);
    return i += i;
    if (i < 100)    {
        result = true;
    } else  {
        result = false;
    }
    }
};
console.log(numberFunction()); // question 9
var average = numArray += numArray / numArray.length -1; // question 10

function willBuyDrink() {
    let isHotOutside = 75;
    let moneyInPocket = 10.50;
    if (isHotOutside > 75 && moneyInPocket >= 10.50)    {
        return true;
    } else {
        return false;
    }
}
willBuyDrink(80);