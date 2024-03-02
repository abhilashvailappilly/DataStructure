function heapSort(arr) {
    // Build the max heap
    buildMaxHeap(arr);
  
    for (let i = arr.length - 1; i > 0; i--) {
     swap(arr,0,i)
  
      heapify(arr, 0, i);
    }
  
    return arr;
  }
  function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  
  function buildMaxHeap(arr) {
    const n = arr.length;
  
    // Build a max heap from the bottom-up
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, i, n);
    }
  }
  
  function heapify(arr, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
  
    if (left < heapSize && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < heapSize && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      swap(arr,i,largest)
      heapify(arr, largest, heapSize);
    } 
  }
  
  // Example usage
  const unsortedArray = [12, 11, 13, 5, 6, 7];
  const sortedArray = heapSort(unsortedArray.slice());
  
  console.log("Original Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray);
  
