let solution2 = (arr) => {
  //Return if there is only one element in the array
  if(arr.length === 1){
    return arr[0];
  }
  
  //Calculate the left sum for each element
  let sumLeft = [];
  sumLeft[0] = arr[0];
  for(let i = 1; i < arr.length; i++){
    sumLeft[i] = sumLeft[i - 1] + arr[i];
    
  }
  
  //Calculate the right sum for each element
  let sumRight = [];
  sumRight[arr.length-1] = arr[arr.length-1];
  for(let i = arr.length-2; i >= 0; i--){
    sumRight[i] = sumRight[i + 1] + arr[i];
  }
  
  //Check the left sum and right sum for each element
  for(let i = 0; i < arr.length; i++){
    if(sumLeft[i] === sumRight[i]){
      return arr[i];
    }
  }
  
  return -1
}

solution2([2, 3, 4, 1, 4, 5]);