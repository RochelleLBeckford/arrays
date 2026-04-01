<!-- & This creates a banner for the ReadMe -->
<img src="img/cherry-blossom-maiden-among-the-cherry-blossom-branches.png" alt="" width="100%" height="300">

# <p align="center">🌸 Arrays: JavaScript's Organized Collector 🌸</p>

## Practice: Storing collections of data so we can manage them with ease

### Understanding JS -> Teaching our programs to group and handle multiple values without cluttering our workspace

<hr>

## <p align="center">💫 Overview</p>
-   [ ] Variables gave my programs memory. Conditionals gave them the power to make decisions. Loops gave them the ability to repeat tasks. Now arrays give them the gift of organization -> the ability to hold multiple values in a single, structured list. It's like moving from having a single, cluttered drawer to a well-organized filing cabinet where everything has its place. This is where data management begins: grouping related items together makes them easier to find, update, and process as a whole.

<hr>

## <p align="center">🎨 Key Design Features</p>
-   [ ] <b>Arrays</b>
    -   [ ] Variables that can hold multiple values, like a collection or a list
-   [ ] <b>Index</b>
    -   [ ] The position of an element in an array, starting from 0, like a numbered seat in a row
-   [ ] <b>Bracket Notation { [] }</b>
    -   [ ] The way to access or change elements in anarray using their index
-   [ ] The <b>.length</b> Property
    -   [ ] A built-in property that tells you how many elements are in an array, like counting the number of items on a shelf
-   [ ] <b>Adding Elements</b>
    -   [ ] .push() -> adds an element to the end of an array
    -   [ ] .unshift() -> adds an element to the beginning of an array
-   [ ] <b>Removing Elements</b>
    -   [ ] .pop() -> removes the last element from an array
    -   [ ] .shift() -> removes the first element from an array
-   [ ] <b>Finding Elements</b>
    -   [ ] .includes() -> checks if an element exists in an array, returning <b>true</b> or <b>false</b>
    -   [ ] .includesOf() -> finds the index of an element, returning its position or -1 if not found

<hr>

-   [ ] Simple practice to understand how programs can group, manage, and work with collections of data
    -   [ ] Storing multiple values in a single variable cleans up your code
    -   [ ] Arrays are perfect for lists, sequences, and collections of related data
    -   [ ] Knowing where an element is (its index) is key to accessing or updating it
    -   [ ] Built-in methods provide powerful ways to add, remove, and find elements without writing complex logic from scratch

<hr>

## <p align="center">👩🏾‍💻 JavaScript Outline</p>
-   [ ] <b>Creating Arrays</b>:
    -   [ ] Arrays are created using square brackers []
    -   [ ] Elements inside are seperated by commas ,
    -   [ ] They can hold any mix of data types (strings, numbers, booleans, etc.)
        ```javascript
            let ninjaTurtles = [
                'Leonardo',
                'Michaelangelo',
                'Donatello',
                'Rapael'
                ];

            console.log(ninjaTurtles);
            /*
            ~ The output:
                ~ ['Leonardo', 'Michaelangelo', 'Donatello', 'Raphael'];
            */
        ```

-   [ ] <b>Accessing Elements with Index</b>:
    -   [ ] An index is an element's position in an array
    -   [ ] Array indices start at 0, not 1
    -   [ ] Use bracket notation [] to access a single element
        ```javascript
            let fruits = [
                'strawberries 🍓',
                'blueberries 🫐',
                'bananas 🍌'
            ];

            console.log(fruits[0]);
            //~ The output: strawberries 🍓

            console.log(fruits[2]);
            //~ The output: bananas 🍌
        ```

-   [ ] <b>Updating and Adding Elements with Bracket Notation</b>:
    -   [ ] Use bracket notation to change the value of an existing element
    -   [ ] You can also assign a value to an index that doesn't exist yet to add an element (be careful of creating gaps)
        ```javascript
            let pokemon = [
                'Bulbasaur',
                'Charmander',
                'Squirtle'
                ];
            console.log(pokemon);
            //~ The output: ['Bulbasaur', 'Charmander', 'Squirtle']

            //~ Change the existing element
            pokemon[2] = 'Pikachu';
            console.log(pokemon);
            //~ The output: ['Bulbasaur', 'Charmander', 'Pikachu']

            pokemon[3] = 'Jigglypuff';
            console.log(pokemon);
            //~ The output: ['Bulbasaur', 'Charmander', 'Pikachu', 'Jigglypuff']
        ```

-   [ ] <b>The .length() Property</b>:
    -   [ ] A built-in property that returns the number of elements in an array
    -   [ ] Essential for loooping through arrays without hardcoding their size
        ```javascript
            const musicNotes = [
                'Do',
                'Re',
                'Mi',
                'Fa',
                'Sol',
                'La',
                'Ti',
                'Do',
            ]
            console.log(musicNotes);
            //~ The output: 8

            for ( let i = 0; i < musicNotes.length; i++) {
                ///~ Prints each note on a new line
                console.log(musicNotes[i]);
            }
        ```

-   [ ] <b>Adding Elements with .push() and .unshift()</b>:
    -   [ ] .unshift() -> adds one or more elements to the <b>beginning</b> of an array
    -   [ ] .push() -> adds one or more elements to the <b>end</b> of an array
        ```javascript
            let candyCrush = [
                'peppermint',
                'cottonCandy',
                'peachSwirl'
            ];
            console.log(candyCrush);
            //~ The output: ['peppermint', 'cottonCandy', 'peachSwirl'];

            //~ Add to the beginning of the array
            candyCrush.unshift('blueberrySwirl');
            //~ Add to the end of the array
            candyCrush.push('strawberryCrush');
            console.log(candyCrush);
            /*
            ~ The output:
                ~ ['blueberrySwirl', 'peppermint','cottonCandy', 'peachSwirl', 'strawberryCrush']
            */
        ```

-   [ ] <b>Removing Elements with .pop() and .shift()</b>:
    -   [ ] .shift() -> removes and returns the first element of an array
    -   [ ] .pop() -> removes and returns the last element of an array
        ```javascript
            const greeks = [
                'Zeus',
                'Hera',
                'Poseidon',
                'Apollo',
                'Hermes',
                'Dionysus',
                'Hades'
            ];
            console.log(greeks);
            //~ The output: ['Zeus','Hera','Poseidon','Apollo','Hermes','Dionysus','Hades']

            //~ Removes and returns the first element -> Zeus
            const shiftedElement = greeks.shift();
            //~ Removes and returns the last element -> Hades
            const poppedElement = greeks.pop();

            console.log(shiftedElement); //~ The output: Zeus
            console.log(); //~ The output: Hades
            console.log();
            //~ The output: ['Hera','Poseidon','Apollo','Hermes','Dionysus']
        ```

-   [ ] <b>Finding Elements with .includes() and .inlcudesOf()</b>:
    -   [ ] .includes(value) -> checks if an array contains a specific value and returns true or false
    -   [ ] .indecOf(value) -> finds the first index of a specific value, or returns -1 if it's not found
        ```javascript
            const stories = [
                "Sorcerer's Stone",
                'Chamber of Secrets',
                'Prisoner of Azkaban',
                'Goblet of Fire',
                'Order of Phoenix',
                'Half-blood Prince',
                'Dealthly Hallows',
            ];
            console.log(stories.includes('Prisoner of Azkaban'));
            //~ The output: true
            console.log(stories.indexOf('Prisoner of Azkaban'));
            //~ The output: 2
            console.log(stories.includes('Fantastic Beasts'));
            //~ The output: false
            console.log(stories.indexOf('Fantastic Beasts'));
            //~ The output: -1
        ```

<hr>

## <p align="center">✨ Encompassed Technologies</p>
-   [ ] <b>JavaScript:</b>
    -   [ ] The programming language that is the magic behind the scenes that makes webpages react, calculate, and come alive. Turning static pages into conversations.
-   [ ] <b>Browser Developer Tools:</b>
    -   [ ] The little laboratory inside browsers likes Chrome and Safari where you can write, test, and debug code without messing up the actual webpage
-   [ ] <b>The Console:</b>
    -   [ ] The dedicated space to output a message and experimentation
-   [ ] <b>VS Code:</b>
    -   [ ] A lightweight but powerful source code editor that provides an integrated terminal, syntax highlighting, and extensions for writing and testing code efficiently
        -   [ ] A digital notebook where all the coding happens.


