const {STORE} = require('../../helpers/store/store');

const {log, largeIntArray} = STORE;

//MAX=98 , min=1
/*

must not have shift(), unshift(),slice()
must be O(n)
 */
const bucketSearch = (arr , min, max) =>{

  const numMap = new Map();
  for (let i=0; i< arr.length; i++) {
    if (numMap.get(arr[i]) === undefined) {
      numMap.set(arr[i], 1);
    }
    else {
      numMap.set(arr[i], numMap.get(arr[i])+1);
    }
  }

  let arrI = 0;
  for (let i = min; i <= max; i++) {
    let numAppearing = numMap.get(i);
    while (numAppearing) {
      arr[arrI] = i;
      numAppearing--;
      arrI++;
    }
  }
  return arr;  
      
};



const min = Math.min(...STORE.largeIntArray);
const max = Math.max(...STORE.largeIntArray);

log(bucketSearch(STORE.largeIntArray,min,max));