function maxConsecutiveSum(arr) {
  //YOUR WORK HERE
  let first = arr[0];
  let last = arr[0];

  for(let i = 1; i < arr.length; i++){
    first = Math.max(first + arr[i], arr[i]);
    console.log(first)
    last = Math.max(first , last)
  }

  return last ? last : 0;
}

maxConsecutiveSum([6, -1, 3, 5, -10])

// output = 13 (6 + -1 + 3 + 5 = 13)