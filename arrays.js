//Question: https://www.hackerrank.com/challenges/js10-arrays/problem



/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    var max=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]>max)
        max=nums[i];
    }
    var max1=0;
    for(var j=0;j<nums.length;j++){
        if(nums[j]!=max){
            if(nums[j]>max1){
            max1=nums[j];
            }
        }
    }
    return max1;
}

