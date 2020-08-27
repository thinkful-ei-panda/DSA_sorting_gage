const swap =(arr,i,j)=>{
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
};

const bubbleSort = arr =>{
	let swap = 0;
	for( let i=0 ; i<arr.length ; i++){
		if(arr[i] > arr[i+1]){
			swap(array, i, i++);
			swap++;
		}
	}
	if (swaps > 0){
		return bubbleSort(arr);
	}
	return arr;
}

const mergeSort = arr => {
	if(arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);
	let l = arr.slice(0,mid);
	let r = arr.slice(mid, arr.length);
	
	l = mergeSort(l);
	right = mergeSort(r);
	return merge(l,r,arr);
}

modules.exports ={
	bubbleSort,
	mergeSort,

} 
