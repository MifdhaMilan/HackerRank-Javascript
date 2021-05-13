//Question: https://www.hackerrank.com/challenges/js10-loops/problem



/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
   const a=Array.from(s);
    for(var i=0;i<a.length;i++){
        if(a[i]=='a' || a[i]=='e' ||a[i]=='i'||a[i]=='o'||a[i]=='u'){
            console.log(a[i]);
        }
    }
    for(var j=0;j<a.length;j++){
         if(a[j]!='a' && a[j]!='e' &&a[j]!='i'&&a[j]!='o'&&a[j]!='u'){
            console.log(a[j]);
        }
    }
    
}

