/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
let val = 0;
let done = false;
while(!done)
{
  done = false;
  for (var i = 0; i < numArray.length - 1; i++)
	if (numArray[i+1] > numArray[i]) 
		{val = numArray[i+1]; numArray[i] = numArray[i+1]; numArray[i+1] = val; done = true;}
}

return numArray;
}

let arr = [0, 3, 4, 5, 7, 2, 7];
console.log(bubbleSort(arr));