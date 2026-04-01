# arrays
<!-- & This creates a banner for the ReadMe -->
<img src="img/cherry-blossom-maiden-among-the-cherry-blossom-branches.png" alt="" width="80%" height="300">

# <p align="center">🌸 Loops: JavaScript's Repetition Master 🌸</p>

## Practice: Making computers do the boring work so we don't have to

### Understanding JS -> Teaching our programs to repeat without losing their minds

<hr>

## <p align="center">💫 Overview</p>
-   [ ] Variables gave my programs memory. Conditionals gave them the power to make decisions. Now loops give them something almost magical -> the ability to do the same thing over and over without me having to write the same code a million times. It's like having a tireless assistant who's happy to repeat a task 100 times without complaining or making mistakes. This is where computers truly shine: they're patient, they don't get bored, and they can do in microseconds what would take me hours.

<hr>

## <p align="center">🎨 Key Design Features</p>
-   [ ] <b>while Loops</b>
    -   [ ] Run as long as a condition stays true like circling a roundabout until you find the right exit
-   [ ] <b>for Loops</b>
    -   [ ] Run a specific number of times, perfect when you know exactly how may repitions you need
-   [ ] <b>iterators</b>
    -   [ ] Variables that keep track of how many times we've looped and help us know when to stop
-   [ ] <b>continue</b>
    -   [ ] A keeyword that skips the current iteration and jumps to the next one
-   [ ] <b>break</b>
    -   [ ] A keyword that exits the loop entirely, no matter how many iterations are left
-   [ ] <b>Nested Loops</b>
    -   [ ] Loops inside other loops -> like the moon orbiting Earth while Earth orbits the sun
-   [ ] <b>Increment (++) and Deparment (--)</b>
    -   [ ] Shortcuts for adding or subtracting 1 from a variable
-   [ ] <b>Ternary Operator</b>
    -   [ ] A shortcut for simple if/else decisionsm all on one line

<hr>

-   [ ] Simple practice to understand how programs make decisions and respond differently based on conditions
    -   [ ] Writing the same code multiple times is tedious -> loops fix that
    -   [ ] Computers excel at repition without getting bored or making mistakes
    -   [ ] Loops can run hundreds, thousands, or even millions of times in seconds
    -   [ ] The right loop structure makes code cleaner, shorter, and more powerful

<hr>

## <p align="center">👩🏾‍💻 JavaScript Outline</p>
-   [ ] The <b>while loop</b>:
    -   [ ] Runs as long as a condition remains true
    -   [ ] The condition is checked before each iteration
    -   [ ] If the condition starts false, the loop never runs
        ```javascript
            let randomNumber = Math.floor(Math.random() * 10);

            while (randomNumber !=7) {
                console.log('Duck 🦆');
                randomNumber = Math.floor(Math.random() * 10);
            }
            console.log('Goose! 🪿');
            /*
            ~ The output:
                ~ Duck 🦆
                ~ Duck 🦆
                ~ Duck 🦆
                ~ Goose! 🪿 (once randomNumber finally becomes 7)
            */
        ```

-   [ ] <b>for loop</b>:
    -   [ ] Perfect when you know exactly how many times you need to repeat
    -   [ ] Has three parts: initialization, condition, and update
        ```javascript
            for (let i = 1; i <= 10; i++) {
                console.log(i);
            }
            /*
            ~ The output:
                ~ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
            ~ The breakdown:
                ~ let i = 1; -> Initializes an iterator variable
                ~ i <= 10 -> Condition checked before each iteration
                ~ i++ -> Increments i by 1 after each iteration
            */
        ```

-   [ ] The <b>increment (++)</b> and <b>decrement (--)</b> operators:
    -   [ ] ++ adds 1 to a variable (i++ is the same as i = i + 1)
    -   [ ] -- subtracts 1 from a variable (i-- is the same as i = i - 1)
        ```javascript
            let count = 5;
            count++; //~ count is now 6
            count--; //~ count is back to 5
        ```

-   [ ] The <b>continue</b> keyword:
    -   [ ] Skips the rest of the current iteration and jumps to the next one
    -   [ ] Useful when you want to ignore certain values
        ```javascript
            for (let i = 0; i < 5; i++) {
                if (i == i) {
                    continue; //~ Skip when i is 1
                }
                console.log(i);
            }
            /*
            ~ The output:
                ~ 0, 2, 3, 4
                ~ Notice that 1 is missing because continue skipped it
            */
        ```

-   [ ] The <b>break</b> keyword:
    -   [ ] Exits the loop entirely, no matter how many iterations are left
    -   [ ] Perfect for when you've found what you're looking for and can stop searching
        ```javascript
            for (let i = 0; i < 5; i++) {
                if (i == 3) {
                    break; //~ Exit the loop when i is 3
                }
                console.log(i);
            }
            /*
            ~ The output:
                ~ 0, 1, 2
                ~ Loop stops at 3 and never gets to 4
            */
        ```

-   [ ] <b>Nested Loops</b>:
    -   [ ] Loops inside other loops -> like the moon orbiting Earth while Earth orbits the sun
    -   [ ] The inner loop completes all its iterations for each single iteration of the otther loop
        ```javascript
            //~ Multiplication table with nested loops
            for (let i = 1; i <= 3; i++) {
                for (let j = 1; i <= 3; j++) {
                    console.log(`${i} * ${j} = ${i * j}`);
                }
            }
            /*
            ~ The output:
                ~ 1 * 1 = 1;
                ~ 1 * 2 = 2;
                ~ 1 * 3 = 3;
                ~ 2 * 1 = 2;
                ~ 2 * 2 = 4;
                ~ 2 * 3 = 6;
                ~ 3 * 1 = 3;
                ~ 3 * 2 = 6;
                ~ 3 * 3 = 9;

                ~ Think of it like this:
                ~ Outer loop (i) = 1: inner loop runs for j = 1, 2, 3
                ~ Outer loop (i) = 2: inner loop runs for j = 1, 2, 3 again
                ~ Outer loop (i) = 3: inner loop runs for j = 1, 2, 3 again
            */
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


