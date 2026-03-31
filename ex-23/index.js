/*
& Five Boroughs

& Arrays
~ Arrays are variables that can hold multiple values:
*/
let array = ["Leonardo", " Michaelangelo", " Donatello", " Raphael"];
console.log('The names of the ninja turtles: ' + array);

/*
~ They are created using square brackers [ and ]
~ And the elements inside are seperated by , commas

~ The elements used for an array can either be a mix of data types, or of a single data type
    ~ The arrays can be defined with let or const
~ For instance, that two arrays below are both valid:
*/
let lotteryNumbers = [13, 36, 45, 57, 67, 14];
const lettersAndNumbers = ['a', ' b', ' c', 1, 2, 3];
console.log('Call us if you have these numbers: ' + lotteryNumbers);
console.log('Check out this array of letters and numbers: ' + lettersAndNumbers);

/*
~ New York City is made of five boroughs that are filled with lots of fun destinations

~ Let's say we're planning a trip to NYC and we want to visit at least one place from each of the five boroughs:
    ~ '🗽 Manhattan -> Washington Square Park'
    ~ '🏟️ The Bronx -> Yankee Stadium'
    ~ '🎡 Brooklyn -> Coney Island'
    ~ '🧧 Queens -> Flushing
    ~ '🌉 Staten Island -> Historic Richmond Town'
~ All this information can be stored in an array:
*/
let myDestinations = [
    '🗽 Manhattan -> Washington Square Park',
'🏟️ The Bronx -> Yankee Stadium',
'🎡 Brooklyn -> Coney Island',
'🧧 Queens -> Flushing',
'🌉 Staten Island -> Historic Richmond Town',
];
console.log(myDestinations);

