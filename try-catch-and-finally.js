//Question: https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem



/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
    var rev=s.split("").reverse().join("");
    console.log(rev);


    }catch(e){
console.log(e.message);
console.log(s);
    }

    
}

