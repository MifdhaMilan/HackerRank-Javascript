//Question: https://www.hackerrank.com/challenges/js10-function/problem


function factorial(n){
    var fact=1;
    for(var i=n;i>0;i--){
         fact*=i;
    }
    return fact;
}

