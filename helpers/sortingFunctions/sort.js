const { lawngreen } = require('color-name');

const swap =(arr,i,j)=>{
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const bubbleSort = arr =>{
  let swaps = 0;
  for( let i=0 ; i<arr.length ; i++){
    if(arr[i] > arr[i+1]){
      swap(arr, i, i++);
      swaps++;
    }
  }
  if (swaps > 0){
    return bubbleSort(arr);
  }
  return arr;
};

/*================================================================================================================== */
/*================================================================================================================== */
/*================================================================================================================== */

const merge = (left, right, arr) =>{
  let leftIndex = 0; 
  let rightIndex = 0;
  let outputIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]) {
      arr[outputIndex++] = left[leftIndex++];
    }
    else{
      arr[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex ; i < left.length ; i++){
    arr[outputIndex++] = left[i];
  }

  for (let i = rightIndex ; i < right.length ; i++){
    arr[outputIndex++] = right[i];
  }
  return arr;
};

const mergeSort = arr => {
  if(arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  let l = arr.slice(0,mid);
  let r = arr.slice(mid, arr.length);
	
  l = mergeSort(l);
  r = mergeSort(r);
  return merge(l,r,arr);
};

/*================================================================================================================== */
/*================================================================================================================== */
/*================================================================================================================== */

const quickSort =(arr, start= 0, end= arr.length) => {
  if (start >= end) return arr;

  const mid = partition(arr,start,end);
  arr = quickSort(arr,start,mid);
  arr = quickSort(arr ,mid + 1, end);
  return arr;
};


const partition = (arr, start, end) => {
  const pivot = arr[end-1];
  let j = start;
  for (let i = start; i < end - 1 ; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i , j );
      j++;
    }
  }
  swap(arr, end - 1, j);
  return j;
};



module.exports ={
  bubbleSort,
  mergeSort,
  quickSort,
}; 
