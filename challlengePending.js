function minimumStepsTwoOne(num) {


  let count = 0;

  function traverse(n){
    if(n === 1) {
     return 0;
    }

    if(n % 2 === 0 || n % 3 === 0 ) {
      count++
    }
    traverse(num  - 1)
  }
  traverse(num)
  return count;
}

minimumStepsTwoOne(10)