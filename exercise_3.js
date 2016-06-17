// EXERCISE 3
//
// Now we are going to save the longest length of every array in a new array called array_lengths
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
// freqCounter will hold the information for how many times the character exists in the string.
// Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq( string ) {
    var freqCounter = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freqCounter[character]) {
            freqCounter[character]++;
        } else {
            freqCounter[character] = 1;
        }


    }
    return freqCounter;
}

counter = charFreq("abbabcbdbabdbdbabababcbcbab");
console.log( counter['a'] === 7);
console.log( counter.b === 14);
console.log( counter['c'] === 3);

counter = charFreq("xyyyxyxyxzyxyzyxyxyasdfz");
console.log( counter.x === 7 );
console.log( counter['y'] === 10 );
console.log( counter.z === 3 );
console.log( counter['a'] === 1 );
console.log( counter['s'] === 1 );
console.log( counter.d === 1 );
console.log( counter['f'] === 1 );


