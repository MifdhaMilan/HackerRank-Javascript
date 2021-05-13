//Question: https://www.hackerrank.com/challenges/js10-bitwise/problem


function getMaxLessThanK(n,k){
    let max=0;
for(let i=1;i<=n;i++){
    for(let j=i+1;j<=n;j++){
        let a=i&j;
         if(a>max && a<k){
             max=a;
         }
    }
}
return max;
}
