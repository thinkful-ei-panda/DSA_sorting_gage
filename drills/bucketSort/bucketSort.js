const {STORE} = require('../../helpers/store/store');


const {log, largeIntArray} = STORE;

//MAX=98 , min=1
/*

must not have shift(), unshift(),slice()
must be O(n)
 */
const iWantToDie = intArray =>{
  const res = [];

  let  i = 0;
  let ones = [];
  let tens = [];
  let twenty = [];
  let thirty = [];
  let forty = [];
  let fifty   = [];
  let sixty  = [];
  let seventy  = [];
  let eighty  = [];
  let ninety  = [];

  while(i< intArray.largeIntArray){
    switch(intArray[i]){
    case (intArray[i] < 10) :
      ones.push(intArray[i]);
      break;
    case (intArray[i] < 20) :
      tens.push(intArray[i]);
      break;
    case (intArray[i] < 30) :
      twenty.push(intArray[i]);
      break;
    case (intArray[i] < 40) :
      thirty.push(intArray[i]);
      break;
    case (intArray[i] < 50) :
      forty.push(intArray[i]);
      break;
    case (intArray[i] < 60) :
      fifty.push(intArray[i]);
      break;
    case (intArray[i] < 70) :
      sixty.push(intArray[i]);
      break;
    case (intArray[i] < 80) :
      seventy.push(intArray[i]);
      break;
    case (intArray[i] < 90) :
      eighty.push(intArray[i]);
      break;
    case (intArray[i] < 100) :
      ninety.push(intArray[i]);
      break;
    } 
  }

  return res;
};