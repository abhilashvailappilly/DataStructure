class Queue {
    constructor(){
        this.items = {}
        this.rear = 0;
        this.front = 0;
    }
   enqueue(element){
    this.items[this.rear] = element 
    this.rear++
   }
   dequeue(){
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
   }
    isEmpty(){
        return this.rear -this.front === 0
    }

    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear - this.front 
    }
    print(){
        // let str = ''
        // let i = this.front
        // while( i !== this.rear){
        //   str += this.items[i] + " "
        //   i++
        // }
        console.log(this.items)
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(60)
queue.print()
queue.dequeue( )
queue.print()