class Node{
    constructor(value){
        this.value = value;
        this.next = null 
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    insertFront(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else{

        let curr = this.head
        node.next = curr
        this.head = node
    }
    this.size++
    }

    insertEnd(value){
        let node = new Node(value)
        if(this.isEmpty()){
            console.log("Empty ")
        } else if (this.size == 0){
            
            this.insertFront(value)
        } else {
        let curr = this.tail
            curr.next = node 
            this.tail = node

        }
        this.size++
    }
    deleteValue(value){
        if(this.isEmpty()){
            console.log("List is empty")
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value 
        }
        let curr = this.head
        let prev = null
        while(curr &&curr.value!=value){
           prev =curr 
            curr = curr.next
        }
        if(curr==null){
            console.log("Value not found")
            return null
        }
        if(prev.next){
            prev.next = curr.next
            this.size--
        return value
        }
        return null

    }
    insertBeforeAndAfterValue(value,before,after){
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        let prev = null;
        const node = new Node(before)
        const node2 = new Node(after)
    
        while(curr!=null && curr.value != value){
            prev = curr
            curr = curr.next
        }
        if(curr===null){
            console.log("No elements found")
            return null 
        }
        //Insert before the value
        if(prev){
    
            prev.next = node
        }
        if(prev == null){
            this.head =node
        }
        node.next = curr
    
        // Insert After the value
          node2.next =curr.next
           curr.next =node2
           if(node2.next == null){
            this.tail = node2
           }
        return
    
    }
    

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
            return null
        }
        let curr =this.head
        let listValues = ''
        while(curr!=null){
            listValues += ` ${curr.value}`
            curr = curr.next
        }
        return listValues
    }
    reverse(){
        if(this.isEmpty()){
            console.log("List empty")
            return null 
        }
        if(this.size == 1){
            return 
        }
        let prev =null
        let curr =this.head
        this.tail =curr
        while(curr){
            let next = curr.next
             curr.next = prev
             prev =curr
             curr = next

        }
        this.head = prev
        return 
    }
  
    dupliSorted(){
        if(this.isEmpty()){
            console.log("array empty")
            return 
        }
        if(this.size == 1){
            return 
        }
        let curr = this.head
        let next =null
        while(curr !=null){
        next =curr.next
           while(next!=null && next.value === curr.value){
            next = next.next
           }
           curr.next = next
           if(next == this.tail){
            this.tail  =curr
           }
           curr = next
        }
        return
    }

    arrayToLinkedList(arr){
        let curr = new Node(arr[0])
        this.head = curr
        for( let i = 1 ; i < arr.length ; i++){
            curr.next = new Node(arr[i])
            curr = curr.next
        }

    }
    
}

const list = new LinkedList()
list.insertFront(124)

// list.insertFront(19)
// list.insertFront(12)
// list.insertFront(13)

list.insertFront(16)
list.insertFront(16)
list.insertFront(16)
list.insertFront(15)
list.insertFront(15)

list.insertFront(14)
list.insertFront(14)
list.insertEnd(100)
console.log(list.print())
list.reverse()
console.log(list.print())

// list.insertBeforeAndAfterValue(124,99,88)


// list.dupliSorted()
// console.log(list.print())

// list.insertEnd(110)
// console.log(list.print())

// list.insertFront(111)
// console.log(list.print())

// list.insertFront(112)
// console.log(list.print())

// console.log(list.deleteValue(10))
// console.log(list.print())


// // list.reverse()


list.arrayToLinkedList([1,2,3,4,5])
console.log(list.print())
