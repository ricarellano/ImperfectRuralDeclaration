var singleNumber = function(nums) {
  let hash = new Set();
  for( let num of nums) {
    if(hash.has(num)){
      hash.delete(num)
    } else {
      hash.add(num)
    }
  }
  return Array.from(hash)[0]
};

singleNumber([2,2,1]);

//Input: [2,2,1]
//Output: 1