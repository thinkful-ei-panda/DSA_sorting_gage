### part 1: Understanding merge sort
Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

- What is the resulting list that will be sorted after 3 recursive calls to mergesort?


`[21, 1, 26, 45, 29, 28, 2, 9,] `,`[ 16, 49, 39, 27, 43, 34, 46, 40]`

[ [ `[21,1,26,45]`,`[29,28,2,9]` ] , [ `[16,49,39,27]`,` [43,34,46,40]` ]]

[ 
    [ `[21,1,]`,`[26,45]`,`[29,28]`,`[2,9]` ],
    [ `[16,49]`,`[39,27]`,`[43,34]`,`[46,40] `]
]



- What is the resulting list that will be sorted after 16 recursive calls to mergesort?

`[ 1,  2,  9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ]` ? 

- What are the first 2 lists to be merged?

 1 & 21 (if you would even call that a list),
 unless if your talking about, 
`[ 1,  2,  9, 21, 26, 28, 29, 45]` LEFT
`[ 16, 27, 34, 39, 40, 43, 46, 49]` RIGHT 

- Which two lists would be merged on the 7th merge?


`[1<16]` `[2<16]` `[9<16]` `[21>16]` `[21<27]` `[26<27]` `[28>27]` `[28<34]` `[29<34]` `[45>34]`
    L       L         L       R          L          L      __R__          L        L          R
`[45>40]` `[45>43]` `[45<46]` [`...46`, `...49`]
    R         R         L           ...R...R

`[1,2,9,16,12,27,28]`?

(these questions are kinda confusing on what they're asking for)

<!---->
### part 2: Understanding quicksort
![sanic_sorting](/img/sanic.png)

- 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

another confusing question... yay. umm
well if i had to guess it would be ether 14 or 17 , since there the closest lesser value of the pivot number witch im guessing it `20`

    - The pivot could have been 17, but could not have been 14
    
    - `The pivot could have been either 14 or 17`<<<<<<<
    
    - Neither 14 nor 17 could have been the pivot
    
    - The pivot could have been 14, but could not have been 17
    
- 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

assuming the end is the pivot point (i.e. 12)

When using the last item on the list as a pivot

piv = 12 
[14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
`[10,3,9,12,15,19,14,17,16,13]`
           ^

run # 2 piv = 13   
[10, 3, 9, 12, 15, 19, 14, 17, 16, 13]
`[3,9,12,10,13,15,19,17,16]`
             ^
When using the first item on the list as a pivot

piv = 14
14, 17, 13, 15, 19, 10, 3, 16, 9, 12
`[ 13, 10, 3 , 9, 12, 14, 15, 16, 19, 17]`
 piv = 13
 `[10, 3, 9, 12, 13, 14, 15, 16, 19, 17]`  
              ^           
(kinda hard to find about what really going on when everyone else has something else to say :/ )


### part 3: Implementing quicksort
Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to `sort` is: `89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5`.

```
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

```

### part 4: Implementing merge sort
Write a function `mSort` that sorts the dataset above using the merge sort algorithm.

```
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
```

### part 5: Sorting a linked list using merge sort

Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.




### part 6: Bucket sort
Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use `arr.splice()`, `shift()` or `unshift()` for this exercise.

### part 7: Sort in place
Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

### part 8: Sorting books
Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.