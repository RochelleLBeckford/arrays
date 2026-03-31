/*
& Where's Waldo

& Array Methods
~ Understanding .indexOf() and .includes() methods

& .indexOf()
~ The index is used to obtain the value of a given array element:
*/
const myArray = [1, 2, 3];
console.log('The number at the index of 1 is: ' + myArray[1]);
//~ The output -> 2

/*
~ What if we wanted to find out the index of a particular element's value? This can be done with the .indexOf() method
*/

const stories = [
    "Sorcerer's Stone",
    'Chamber of Secrets',
    'Prisoner of Azkaban',
    'Goblet of Fire',
    'Order of the Phoenix',
    'Half-blood Prince',
    'Deathly Hallows',
    'Deathly Hallows'
];

console.log('The index of "Half-blood" Prince is: ' + stories.indexOf('Half-blood Prince'));
console.log('The index of "Prisoner of Azkaban" is: ' + stories.indexOf('Prisoner of Azkaban'));
/*
~ The output ->
    ~ The index of Half-blood Prince is: 5
    ~ The index of Prisoner of Azkaban is: 2
*/

//~ If the array doesn't have the value we're looking for, -1 is returned instead
console.log('Since "Deathly Hallows Pt 2" is not in the array the index is: ' + stories.indexOf('Deathly Hallows Pt 2'));

//~ Note: If there are multiple elements with the same value in an array,the .indexOf() returns the index of the first occurrence of that value
console.log('The first index taken since there are multiple "Deathly Hallows" in the list is: ' + stories.indexOf('Deathly Hallows'));

/*
& .includes()
~ You can also check if an array contains a particular element value with the .includes() method:
    ~ array.includes(value);

~ The .include() method checks if an element with the value parameter exists in the array, and returns a boolean true if it does or false otherwise
*/
const myArray2 = [1, 2, 3];

console.log(myArray2.includes(3)); //~ The output -> true
console.log(myArray2.includes(15)); //~ The output -> false


//& Practice using the .indexOf() & .includes() methods with a variation of the notable "Where's Waldo?" children's books

const characters = [
    'The Wally Watchers',
    'Wilma',
    'Fritz',
    'Wizard Whiteboard',
    'Odlaw',
    'Waldo',
    'Woof'
];

if (characters.includes('Waldo')) {
    let waldoIndex = characters.indexOf('Waldo');
    console.log('Found Waldos at index ' + waldoIndex);
} else {
    console.log('Not Found');
}
