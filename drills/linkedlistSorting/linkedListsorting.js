const {LinkedList} = require('../../helpers/linkedLists/linkedLists');
const {STORE} = require('../../helpers/store/store');

const {log, largeIntArray, display} = STORE;

const makeList = () =>{
  const superDuperUltraFunLinkList = new LinkedList;

  for(let i=0; i<largeIntArray.length ; i++){
    superDuperUltraFunLinkList.insertFirst(largeIntArray[i]);
  }
  return superDuperUltraFunLinkList;
};

// log(makeList());


/*
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
*/

const mergeLinkedList = (left, right, arr) => {

};

const findRightSide = list =>{

  let counter = list.head;
  let length = 0;
  while (counter.next !== null){
    counter = counter.next;
    length++;
  }
  let mid = Math.floor(length/2);
  let i = 0;
  let end ; 
  let aux ;
  let start = list.head;
  while(i <= mid){
    if(i === mid){
      return end;
    }
    aux = start.next;
    start.next = end;
    end = start;
    start = aux;
    i++;
  }
};

const findLeftSide = list =>{

  let counter = list.head;
  let length = 0;
  while (counter.next !== null){
    counter = counter.next;
    length++;
  }
  let mid = Math.floor(length/2);
  let i = 0;
  let end ; 
  let aux ;
  let start = list.head;
  while(i <= mid){
    if(i === mid){
      return start;
    }
    aux = start.next;
    start.next = end;
    end = start;
    start = aux;
    i++;
  }
};


log(display(findLeftSide(makeList())));

const splitLinkedList = (list) =>{
  if(!list.next) return list;

  let left = findLeftSide(list);
  let right = findRightSide(list);

  left = splitLinkedList(list.head = left);
  right = splitLinkedList(list.head = right);
  return mergeLinkedList(left, right,list)
};

