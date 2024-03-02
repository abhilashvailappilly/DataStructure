class Queue {
    constructor(){
        this.items  = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length == 0
    }
    peek(){
        if(!isEmpty()){
            return this.items[0]
        }
        return null 
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items)
    }
}
const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.print()

queue.enqueue(20)
queue.print()

queue.enqueue(30)
console.log(queue.isEmpty())
console.log(queue.size())
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()

queue.enqueue(100)
queue.print()
queue.dequeue()

queue.print()
