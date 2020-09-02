var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] === 1) {
        count++
        max = Math.max(count, max)
      } else {
        count = 0;
      }
    }
  return max
};

findMaxConsecutiveOnes([1,1,0,1,1,1]);
//Input: [1,1,0,1,1,1]
//Output: 3