const sortedSquares = function(A) {
let start = 0;
let end = A.length;
let arr =[];
    while(start < end) {
      arr.push(A[start] * A[start]);
      start++
    }
    return arr.sort((a, b) => a-b);
};

sortedSquares([-4,-1,0,3,10]);

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]