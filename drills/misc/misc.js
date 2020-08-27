const {STORE} =require('../../helpers/store/store');

const {log} = STORE;


const merge = (left, right, arr) =>{
  let leftIndex = 0; 
  let rightIndex = 0;
  let outputIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]) {
      log(left,'LEFT');
      arr[outputIndex++] = left[leftIndex++];
    }
    else{
      log(right,'RIGHT');
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

log(mergeSort(STORE.pOneArray));