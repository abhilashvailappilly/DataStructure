 class circularQueue {
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity;
        this.currentLength = 0 ;
        this.rear = -1
        this.front = -1
    }
    isFull(){
        return this.currentLength == this.capacity
    }
    isEmpty(){
        return this.currentLength === 0
    }
    enqueue(ele){
        if(!this.isFull()){
            this.rear =(this.rear+1) % this.capacity;
            this.items[this.rear] = ele
            this.currentLength++
            if( this.front == -1){
                this.front = this.rear
            }
        }
        return
    }
    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        const item = this.items[this.front]
        this.items[this.front] = null;
        this.front = (this.front+1)% this.capacity
        this.currentLength--
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item 
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }
    print(){
        if(this.isEmpty()){
            console.log("Queue is empty ")
        } else {
            let  i
            let str = ""
            for (   i = this.front ; i!=this.rear ;i = (i+1)%this.capacity){
                str += this.items[i] + " "
            }
            str += this.items[i]
            console.log(str)
        }
    }
 }

 const queue = new circularQueue(5)
 queue.enqueue(10)
 queue.enqueue(20)
 queue.enqueue(30) 
 queue.enqueue(40) 
 queue.enqueue(50) 
 queue.print()

 console.log(queue.dequeue())

 queue.enqueue(60) 
//  console.log(queue.dequeue())
 queue.print()