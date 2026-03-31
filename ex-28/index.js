/*
& DNA

~ Facts about arrays:
    ~ Creating, accessing and updating an array with square brackets.
    ~ Looping over arrays with the .length property
    ~ Adding and removing array elements with various methods:
        ~ .push() -> push an element to the end of an array
        ~ .unshift() -> puts an element at the beginning of an array
        ~ .shift() -> removes an element from the beginning of an array and returns that element
        ~ .pop() -> removes an element at the end of an array and returns it
    ~ Confirming if a given element or value exists in an array with the:
        ~ .includes() -> will return true if the element is there and false if he is not there
        ~ .indexOf() -> will return the index of the element searching for and -1 if the element is not there
*/

/*
& Build a DNA Sequence
~ DNA is made of the following four:
    ~ Adenine (A)
    ~ Cytosine (B)
    ~ Guanine (G)
    ~ Thymine (T)

~ Collectively, these four pieces represent the unique genetic makeup of most life forms

~ Create a 24-element myDNA array of that by randomly choosing one of these four pieces Start with the following array:
*/
const dnaPieces = ['A', 'B', 'C', 'G', 'T'];
console.log(dnaPieces);

/*
~ Inside a loop, to build the myDNA array by doing the following:
    ~ Get three random index numbers from dnaPieces with Math.floor() & Math.random()
    ~ Build a string of three letters by accessing the dnaPieces array elements with the tree random index numbers
    ~ Add this string to the myDNA array
~ Lastly, log the myDNA array to the console
~ The output ->
    ~ [
    ~   "TAG", "GAG", "ATA", "AAC",
    ~   "AAT", "CTT", "AGG", "TAG",
    ~   "ATC", "ACT", "GAG", "TTA",
    ~   "CTG", "ACG", "GAC", "TCC",
    ~   "GTA", "ACT", "GCA", "GTA",
    ~   "GCG", "GCT", "TCT", "TAA"
    ~ ]
*/
//~ An empty array that will store all the DNA sequences
let myDNA = [];

/*
~ for loop:
    ~ Created 24 DNA sequences
    ~ Each sequence will be 3 letters long
    ~ Start i at 0, continue while i < 24, increase i by 1 each time
*/
for (let i = 0; i < 24; i++) {
    /*
    ~ Get 3 random index numbers from dnaPieces array
        ~ Math.floor() -> rounds down to whole number
        ~ Math.random() -> gives number between 0 & 1
        ~ Then multipy by dnaPieces.length (which is 5) gives number between 0 & 5
    */
    let randomIndex1 = Math.floor(Math.random() * dnaPieces.length);
    // console.log(randomIndex1);
    let randomIndex2 = Math.floor(Math.random() * dnaPieces.length);
    let randomIndex3 = Math.floor(Math.random() * dnaPieces.length);

    /*
    ~ String of three random letters
        ~ The random indices will will pick 3 random numbers
    */
    let threeLetterSequence = dnaPieces[randomIndex1] + dnaPieces[randomIndex2] + dnaPieces[randomIndex3];
    console.log(threeLetterSequence);

    //~ Add the three letters to the myDNA array
    myDNA.push(threeLetterSequence);
}
//~ Log the myDNA array to the console
console.log(myDNA);
