 
  class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    buildHeap(arr) {
      this.heap = [...arr];
      for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    remove() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const root = this.heap[0];
      const lastElement = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastElement;
        this.heapifyDown(0);
      }
  
      return root;
    }
  
    heapifyUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[index] > this.heap[parentIndex]) {
          this.swap(index, parentIndex);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    heapifyDown(index) {
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largestChildIndex = index;
  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestChildIndex]) {
          largestChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestChildIndex]) {
          largestChildIndex = rightChildIndex;
        }
  
        if (largestChildIndex !== index) {
          this.swap(index, largestChildIndex);
          index = largestChildIndex;
        } else {
          break;
        }
      }
    }
    
    heapSort1(){
        let arr = this.heap
        var sorted = [];
        var heap1 = new MaxHeap();
        
        for(let i=0; i<arr.length; i++){
            heap1.insert(arr[i]);
        }
        
        for(let i=0; i<arr.length; i++){
            sorted.push(heap1.remove());
        }
        return sorted;
    }
    heapSort(){
        // let res = ['result ']
        let len = this.heap.length
        // for(let i=0; i<len; i++){
        //     let num = this.remove()
        //     this.heap.push(num)
        // }
        // return res
        for (let i = len-1; i > 0; i--) {
            // Swap the root (maximum element) with the last element
            this.swap(0, i);
        
            // Heapify the reduced heap
            this.heapifyDown(0);  // Corrected: Remove the second parameter 'i'
          }
    }
  
    swap(i, j) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
    }
  }
 // Max Heap
 const maxHeap = new MaxHeap();
 maxHeap.buildHeap([4, 2, 12,33,44,43,35,121,7, 1, 9, 3]);
 console.log(maxHeap.heap); // Output: [9, 4, 7, 1, 2, 3]
//  maxHeap.insert(5);
//  console.log(maxHeap.heap); // Output: [9, 5, 7, 1, 2, 3, 4]
//  maxHeap.remove();
//  console.log(maxHeap.heap); // Output: [7, 5, 4, 1, 2, 3]
 console.log(maxHeap.heapSort())
 console.log(maxHeap.heap); 
 