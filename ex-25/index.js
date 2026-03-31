/*
& Times Tables

& The .length Property
~ There are times when you may need to know how many elements are in the array we are using
~ In JavaScript arrays are special variables that have data properties we can use
~ One of these properties is called .length and produces an integer that tells us how long an array is (or how many elements it has)

~ arrayName.length;
~ Note: The .length property is used with a period, or dot notation
*/

//~ The length of an array can also be stored in a seperate variable:
const testScores = [78, 96, 100, 88, 85, 81, 79];
console.log(testScores);
const numberOfScores = testScores.length;
console.log('The length of the testScores array is: ' + numberOfScores);
//~ The output -> 7

/*
& Looping Over Arrays
~ One common use for the .length property of an array is working with loops (namely, the for loops):
*/
const musicNotes = ['Do', 'Re', 'Mi', 'Fa', 'So', 'La', 'Ti', 'Do'];

for (let i = 0; i < musicNotes.length; i++) {
    console.log(musicNotes[i]);
}
console.log('The length of the musicNotes array is: ' + musicNotes.length);

/*
~ Using bracket notation, we can access the next element in the array with the i loop variable
~ Note: We named the iterator variable i but we can technically give this any name as long as it is consistent throughout the loop
*/

//~ While loops can be used with arrays as well
let counter = 0;

while (counter < musicNotes.length) {
    console.log(counter);
    counter++;
}
/*
~ Note: When using arrays with loops, you are likely to encounter the notable 'off-by-one'error that happens when you're trying to access an index that doesn't exist or if you begin the index with 1 instead of 0.
*/

/*
& Practice using arrays with loops by reciting our times tables

~ Many teachers believe that you should memorize a 9 x 9 table (i.e. 9 x 0 through 9 x 9)

~ Create the following variables:
    ~ A multiple variable that should be set to an integer above 0
    ~ A numbers array of integers 0 through 9
~ Then, use a for loop to iterate through the numbers array and multiply a given number by multiple each time
~ Then print the results to the console

~ If you chose 9 for your multiple, the output should look like this:
    ~ 9 x 0 = 0
    ~ 9 x 1 = 9
    ~ 9 x 2 = 18
    ~ 9 x 3 = 27
    ~ 9 x 4 = 36
    ~ 9 x 5 = 45
    ~ 9 x 6 = 54
    ~ 9 x 7 = 63
    ~ 9 x 8 = 72
    ~ 9 x 9 = 81
*/
//~ Define the variable:
    //~ The number i will be multiplying each value in the area by
let multiple = 5;
//~ Define the variable for the array that will have integers 0 through 9
let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(multiple);
// console.log(numbersArray);

for (let i = 0; i < numbersArray.length; i++) {
    // console.log(i);
    // console.log(multiple * i);
    /*
    ~ Template literal (the backticks) allows embedding variables directly in strings
    ~ ${multiple} - Inserts the value of multiple (5)
    ~ ${i} - Inserts the current loop counter (0-9)
    ~ ${multiple * i} - Calculates and inserts the product
    */
    console.log(`${multiple} * ${i} = ${multiple * i}`);
}
