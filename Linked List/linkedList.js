const { createSecureContext } = require("tls")

class Node {
    constructor(value) {
        this.value = value
        this.next = null 
    }
}

class LinkedList {
    constructor(){
        this.head =null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    // Time complextiy O(1)
    prepend(value){
        const node  = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

   

    // Time complextiy O(n)
    append(value){
        const node  = new Node(value)
        if(this.isEmpty()){
            this.prepend(value)
        }else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node

            this.size++
        }
    }

    insertAt(index,value){
        if(index < 0 || index > this.size) {
            console.log("Index is not valid , Index should be in the range between 0 & Size")
            return 
        }
        if( index === 0){
            this.prepend(value)
        } else {
            const node  = new Node(value)
            let prev = this.head
            for (let i =0 ; i < index-1 ; i++){
                prev=prev.next;
            }
            node.next = prev.next
            prev.next = node
            this.size++

        }
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            // console.log("")
            return null
        }
        let removeNode
        if( index === 0){
            removeNode = this.head
            this.head = this.head.next
        } else{
            let prev = this.head
            for (let i =0 ; i < index-1 ; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size-- 
        return removeNode.value

    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head == value){
            this.head = this.head.value
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !==value){
                prev = prev.next
            }
            if(prev.next) {
             let   removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null
        }
    }

    searchValue(value){
        if(this.isEmpty()){
            return null
        }
        let curr = this.head
        for (let  i = 0 ; i < this.size ; i++){
            if (curr.value === value){
                console.log("Value found at  " , i ,"position")
                return i 
            }
           
            curr = curr.next
        }
        return -1
    }

    reverse(){
       
        let curr = this.head
        let prev =null 
        while(curr){
          let  next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
       this.head =prev
        return 1
    }

    reverseRecurrsively(){
        if(this.isEmpty()){
            return null
        }
        if(this.size == 1){
            return 
        }
        this.head =this.reccursive(this.head)
       
    }
  reccursive(head){
        if(head == null || head.next == null){
            return head
        }
        let newHead = this.reccursive(head.next);
        head.next.next = head;
        head.next = null;
        return newHead
        }

    print() {
        if(this.isEmpty()){
            console.log("List is empty")
            return -1
        } else {
            let curr  = this.head
            let listValues = ''
            while(curr){
                // console.log(curr.value)
                listValues += `  ${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

const list  = new LinkedList()
// console.log('List is empty ?',list.isEmpty())
// console.log('List Size ?',list.getSize())
// list.append(201)
// console.log('List Size ?',list.getSize())
// list.prepend(10)
// list.print()
// list.prepend(202)
list.prepend(202)
list.append(203)
list.append(204)
list.prepend(2909)
list.print()
list.insertAt(1,100)
list.print()
list.insertAt(20,101)
console.log('List Size ?',list.getSize())
list.print()

// console.log("Remove node ",list.removeFrom(4))
console.log("Removed Value from List ",list.removeValue(100))

list.print()
// console.log(list.searchValue(204))
// list.reverse()
list.reverseRecurrsively()
list.print()

// console.log('Print the List ', list.print())