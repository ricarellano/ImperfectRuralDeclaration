function power(base, exponent) {
  // YOUR WORK HERE
  let result = 1;

  function multiply(index) {
    if(index === exponent) {
      return;
    }

    result *= base;
    multiply(index + 1);
  }
  multiply(0)
  return result;
}

power(3, 4)