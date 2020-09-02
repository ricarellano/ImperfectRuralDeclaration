var moveZeroes = function(nums) {
  let anchor = 0;
  for(let explorer = 0; explorer < nums.length; explorer++) {
    if(nums[explorer] !== 0) {
      let temp = nums[anchor];
      nums[anchor] = nums[explorer];
      nums[explorer] = temp;
      anchor++
    }
  }
  return nums
};

moveZeroes([0,1,0,3,12]);

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]