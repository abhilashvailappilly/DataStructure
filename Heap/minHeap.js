class MinHeap {
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
        if (this.heap[index] < this.heap[parentIndex]) {
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
        let smallestChildIndex = index;
  
        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
          smallestChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
          smallestChildIndex = rightChildIndex;
        }
  
        if (smallestChildIndex !== index) {
          this.swap(index, smallestChildIndex);
          index = smallestChildIndex;
        } else {
          break;
        }
      }
    }
  
    swap(i, j) {
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
    }
  }
  
 
  
  // Example usage:
  
  // Min Heap
  const minHeap = new MinHeap();
  minHeap.buildHeap([4, 2, 7, 1, 9, 3]);
  console.log(minHeap.heap); // Output: [1, 2, 3, 4, 9, 7]
  minHeap.insert(5);
  console.log(minHeap.heap); // Output: [1, 2, 3, 4, 9, 7, 5]
  minHeap.remove();
  console.log(minHeap.heap); // Output: [2, 4, 3, 5, 9, 7]
  
 