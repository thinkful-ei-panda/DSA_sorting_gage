const {STORE} = require('../../helpers/store/store');
const { swap } = require('../../helpers/sortingFunctions/sort');

const {log, largeIntArray} = STORE;


const randomInPlace = arr => {
  let i = 0;
  let randomInt;
  while ( i < arr.length){
    randomInt = Math.floor(Math.random() * Math.floor(arr.length));
    swap(arr,i, randomInt);
    i++;
  }
  return arr;
};

log(randomInPlace(largeIntArray));