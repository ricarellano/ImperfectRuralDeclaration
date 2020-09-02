function mergeTwoSortedArray(arr1, arr2) {
  let arr1Small = 0;
  let arr2Small = 0;
  let len = (arr1.length < arr2.length) ? arr2.length : arr1.length;
  let result = []

  while(arr1Small < len && arr2Small < len){
    if(arr1[arr1Small] < arr2[arr2Small]){
      result.push(arr1[arr1Small])
      arr1Small++
    } else {
      result.push(arr2[arr2Small])
      arr2Small++
    }
  }
  return result;
}
mergeTwoSortedArray([1,2,3], [2,5,5]);

/*
var merge = function(nums1, m, nums2, n) {
  let left = 0;
  let right = 0;
  let result = [];
  while(left < m + n && right < n) {
   if(nums1[left] > 0 && nums1[left] < nums2[right]){
      result.push(nums1[left])
      left++
    } else {
      result.push(nums2[right])
      right++
    }
  }
  return result;
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3 );
*/