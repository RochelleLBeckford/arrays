/*
& Music Playlist

& Adding Elements
~ You can use an array index for an existing element to replace the value for that element:
*/
const bandMembers = ['J.C.', 'Joey', 'Lance', 'Justin'];
console.log(bandMembers);
bandMembers[1] = 'Nick';
console.log(bandMembers);

//~ The output -> [ 'J.C.', 'Nick', 'Lance', 'Justin' ]

/*
~ Can add more elements to arrays with built-in methods

~ Methods are pieces are pieces of code that some variabless can use to perform specific actions, like produce a new value.
~ We refer to them with dot notation, similar to the .length property

~ For instance, you can add new elements to the beginning and end of an array with the .unshift() and .push() methods, respectively:

~ myArray.unshift();
~ myArray.push();

~ The newValue is known as a parameter that we pass into the method. Some methods use parameters while others do not

~ You can also add multiple elements with the .push() and .unshift() methods by seperating each new value with a comma
    ~ i.e. .push(newValue1, newValue2);

~ Note: For every new element added to an array with the .unshift() method, the indicies of the other elements are shifted up by 1
*/


//& Example using .unshift() and .push()
let candyCrush = ['peppermint', 'cottonCandy', 'peachSwirl'];
console.log(candyCrush);

//~ This will print to the beginning of the array
    //~ The indicies of the other elements are shifted up by 1 -> an element at index 0 will move to index 1
candyCrush.unshift('blueberrySwirl');
//~ This will print to the end of the array
candyCrush.push('strawberryCrush');

console.log(candyCrush);


/*
& Removing Elements
~ Not only can we add elements to an array, we can also remove them as well with the .shift() and .pop() methods

~ The .shift() method removes and returns the first element in an array, shifting the indicies of the remaining elements back by 1

~ Conversely, the .pop() method removes and returns the last element of an array:
*/
const greeks = ['Zeus', 'Hera', 'Poseidon', 'Apollo', 'Hermes', 'Dionysus', 'Hades'];
console.log(greeks);

//~ This removes and returns the first element in an array -> Zeus
const shiftedElement = greeks.shift();
//~ This removes and returns the last element in an array -> Hades
const poppedElement = greeks.pop();

console.log(shiftedElement);
console.log(poppedElement);
console.log(greeks);

/*
~ The output ->
    ~ Zeus
    ~ Hades
    ~ ['Hera', 'Poseidon', 'Apollo', 'Hermes', 'Dionysus']

~ Notes: By 'returns', we mean that greeks.shift() produces a single value, the removed first element, that can be used elsewhere in the program (such as being printed or stored in a variable)
*/

/*
& Create a customized playlist
    ~ Remove the first and last elements
    ~ Add one new element to end of the array
    ~ Add two new elements to the beginning of the array
*/
const musicPlaylist = [
    'Tom Sawyer',
    'Sabotage',
    'I Wanna Dance With Somebody',
    "Don't Speak",
    'Bulls On Parade',
    'Thriller',
    'The Breks',
    'Aeroplane Over The Sea',
    'Tubthumping'
];

//~ Remove the first and last elements
const shiftedMusic = musicPlaylist.shift();
const poppedMusic = musicPlaylist.pop();

console.log(shiftedMusic);
console.log(poppedMusic);
console.log(musicPlaylist);

//~ Add one new element to end of the array
const addNewMusicEnd = musicPlaylist.push('Misery Business');

// console.log(addNewMusicEnd);
// console.log(musicPlaylist);

//~ Add two new elements to the beginning of the array
const addNewMusicBeginning = musicPlaylist.unshift('Still Into You', 'Bring Me To Life');

// console.log(addNewMusicBeginning);
console.log(musicPlaylist);
