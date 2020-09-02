
function bitFlip(arr, n) {
  let left = 0;
  let right = 0;
  let toggle = 0;
  let max = 0;

  while(right < arr.length) {
    if(arr[right] === 0){
      toggle++
    }
    right++
  

  while(toggle > n) {
    if(arr[left] === 0) {
      toggle--
    }
    left++
  }
  max = Math.max(max, right - left);
}
return max;
}

bitFlip([0,1,1,1,0,1,0,1,0,0], 2)