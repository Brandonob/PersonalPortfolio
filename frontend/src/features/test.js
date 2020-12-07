const searchInsert = function(nums, target) {
    let firstIndex = 0
    let lastIndex = nums.length - 1
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
    
    
    while(firstIndex <= lastIndex){
        middleIndex = Math.floor((firstIndex + lastIndex) / 2)
         let middleElement = nums[middleIndex]
         
         if(middleElement === target){
             return middleIndex
         } else if(middleElement > target) {
             lastIndex = middleIndex - 1         
         } else {
             firstIndex = middleIndex + 1
         }
    
    }
    return firstIndex 
};

console.log( searchInsert([1,3,5,6], 2) )
console.log( searchInsert([1,3,5,6], 7) )
console.log( searchInsert([1,3,5,6], 0) )