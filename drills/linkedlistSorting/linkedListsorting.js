/* eslint-disable eqeqeq */
const {LinkedList} = require('../../helpers/linkedLists/linkedLists');
const {STORE} = require('../../helpers/store/store');
const linkedLists = require('../../helpers/linkedLists/linkedLists');

const {log, largeIntArray, display} = STORE;

const makeList = () =>{
  const superDuperUltraFunLinkList = new LinkedList;

  for(let i=0; i<largeIntArray.length ; i++){
    superDuperUltraFunLinkList.insertFirst(largeIntArray[i]);
  }
  return superDuperUltraFunLinkList;
};


const mergeSortedList = (left, right ) => {
 
  let res = new LinkedList;
  let curLeft = left.head;
  let curRight = right.head;

  while (curLeft && curRight) {
    if(curLeft.value <= curRight.value){
      res.insertLast(curLeft.value);
      curLeft = curLeft.next;
    }
    else {
      res.insertLast(curRight.value);
      curRight = curRight.next;
    }
  }

  while(curLeft){
    res.insertLast(curLeft.value);
    curLeft = curLeft.next;  
  }
  while(curRight){
    res.insertLast(curRight.value);
    curRight = curRight.next;  
  }
  return res;
};



const listSplit = (list, left, right) =>{

  let curNode = list.head;
  if (curNode === null)return; 
  const resList = new LinkedList;
  let i = 0;
  while (curNode){
    if( i >= left && i < right) {
      resList.insertLast(curNode.value);
    }
    i++;
    curNode = curNode.next;
  }
  return resList;
};



const sortLinkedList = (list) =>{
    
  let curNode  = list.head;
  if (curNode.next === null) return list;

  let length = 1;
  while(curNode.next !== null) {
    length++;
    curNode = curNode.next;
  }
  const midIndex = Math.floor(length/2);
  
  let left = listSplit(list, 0, midIndex);
  let right = listSplit(list, midIndex, length);

  left = sortLinkedList(left);
  right = sortLinkedList(right);

  return mergeSortedList(left, right);
};







log(sortLinkedList(makeList()));