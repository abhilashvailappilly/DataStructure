class Node {
    constructor(value){
        this.value =value
        this.next = null
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }

    insertAtFront(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++

    }
    insertAtEnd(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
            
        } else {
            this.tail.next = node 
            node.prev = this.tail 
            this.tail = node 
        }
        this.size++
    }
    inserAtPosition(index,value){
        let node = new Node(value)
        if(index < 0 || index > this.size){
            console.log("Enter a valid Index ")
            return null 
        }
        if(index == 0){
            this.insertAtFront(value)
        } else {
            let curr = this.head 
            for( let i = 0 ; i < index-1 ; i++){
                curr = curr.next
            }
            node.next = curr.next 
            node.prev = curr
            curr.next =node
            if(node.next){
                node.next.prev = node;
            } else {
                this.tail = node 
            }

        }
        this.size++
    }
    deleteAtFront(){
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        if(curr.next){
            let next = curr.next
            next.prev =null;
            this.head =next
        } else {
            this.head =null
            this.tail =null
        }
       this.size--
        return curr.value
    }
    deleteAtEnd(){
        if(this.isEmpty()){
            return null
        }
        if(this.size === 1){
            this.deleteAtFront()
        }
        let curr = this.tail
        let prev = curr.prev
         prev.next = null
         this.tail = prev
        this.size--
        return curr.value
    }
    deleteAtPosition(index){
        if(this.isEmpty()){
            return null
        }
        if(index > this.size || index <= 0){
            console.log("Invalid Index")
            return null
        }
        if(index === 1){
           return  this.deleteAtFront()
        }
       else if(this.size === index){
           return  this.deleteAtEnd()
        } 

        let curr = this.head
        for ( let i = 0 ; i < index-1 ; i++){
            curr = curr.next
        }
        let prev = curr.prev
     if(curr.next){
        prev.next = curr.next
        curr.next.prev = prev
     } else{
        this.tail = prev
     }
        this.size--
        return curr.value

    }
    print(){
        let dList = ""
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        while(curr){
            dList += ` ${curr.value}`
            curr = curr.next
        }
        return dList
    }
    reverse(){
        if(this.isEmpty()){
            return null 
        }
        if(this.size === 1){
            return "ok"
        }
        
        let curr = this.head
        let temp = null

        while(curr!= null){
            temp = curr.next
            curr.next= curr.prev
            curr.prev = temp;

            curr = curr.prev
        }

        temp = this.head
        this.head = this.tail
        this.tail = temp

        return "reversed"
    }
}

const DoublyList = new DoublyLinkedList()
DoublyList.insertAtFront(10)
DoublyList.insertAtFront(101)
console.log(DoublyList.print())
DoublyList.insertAtEnd(99)
DoublyList.insertAtEnd(999)
console.log(DoublyList.print())
DoublyList.inserAtPosition(3,1000)
console.log(DoublyList.print())
// console.log(DoublyList.deleteAtFront())
// console.log(DoublyList.deleteAtFront())
console.log(DoublyList.print())
// console.log(DoublyList.deleteAtEnd())
console.log(DoublyList.print())
console.log(DoublyList.deleteAtPosition(5))
console.log(DoublyList.print())
DoublyList.reverse()
console.log(DoublyList.print())


