/*
& Grocery Trip

& Index
~ In order to access a single element in an array and change elements within it, we need to first learn about index
~ An index is an element's position in an array
*/
let fruits = ['strawberries 🍓', 'blueberries 🫐', 'bananas 🍌'];
/*
~ The element at index 0 is strawberries 🍓
~ The element at index 1 is blueberries 🫐
~ The element at index 2 is bananas 🍌
~ To access a single element. in an array, we use the bracket notation
*/
console.log(fruits[0]);
//~ The output -> strawberries 🍓

/*
~ The code above usess bracket notatin to retrieve the value of the first element of the fruits array. But if it is the first element why are we using 0 instead of 1
~ Array indicies start at 0, not at 1
~ We can also use bracket notation to change the value of an existing element
*/
let pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];
console.log(pokemon);
//~ The output -> ['Bulbasaur', 'Charmander', 'Squirtle']
pokemon[2] = 'Pikachu';
console.log(pokemon);
//~ The output -> ['Bulbasaur', 'Charmander', 'Pikachu']

/*
~ It can also be used to assign a new value to an index that doesn't yet exists
    ~ Like adding a new element to end of the array
*/
let meetings = [4, 4, 1, 3, 2];
console.log(meetings);
meetings[5] = 0;
console.log(meetings);
//~ The output -> [4, 4, 1, 3, 2, 0]

//~ Note: Be careful when creating new elements like this, for you may end up creating undefined elements between the old last element and the new last element:
let temperature = [75, 69, 71, 64];
console.log(temperature);
temperature[6] = 88;
console.log(temperature);
//~ The output -> [ 75, 69, 71, 64, <2 empty items>, 88 ]

//& Let's use array bracket notation to customize a list for a trip grocery store
let groceryList = ['🥛 Milk', '🥑 Avocado', '🥚 Egg', '🍞 Bread'];
console.log(groceryList);
/*
~ It looks like we actually don't need eggs. But we do need butter and laundry soap
~ Use bracket notation to:
    ~ Replace '🥚 Eggs' with '🧈 Butter'
    ~ Add '🧼 Laundry soap' to the end of the groceryList array
~ Finally, log the updated groceryList array to the console.
*/
groceryList[2] = '🧈 Butter';
console.log(groceryList);
groceryList[4] = '🧼 Laundry soap';
console.log(groceryList);


