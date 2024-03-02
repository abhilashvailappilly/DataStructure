class Node {
    constructor(value){
        this.value = value;
        this.next = null 
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size 
    }
    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else{
            node.next = this.head
            this.head =node
        }
        this.size++
    }
    append(value){
        let node = new Node(value)
        if(this.isEmpty()){
         this.prepend(value)
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
            this.size++
        }
    }

    print1(){
        if(this.isEmpty()){
            return 
        }
        let curr = this.head;
        while(curr){
            console.log(curr.value)
            curr= curr.next
        }
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

    reverse(){
        if(this.isEmpty()){
            return 
        }
        let curr = this.head
        let prev = null
        while(curr ){
            let next =curr.next
            curr.next =  prev
            prev = curr
            curr = next
        }
        this.head = prev

    }
    insertPosition(index,val){
        if(this.isEmpty()){
            return this.append(val)
        }
        let node = new Node(val)
        if(this.size < val){
            return 
        }
        let curr = this.head
        let prev =null
        while(curr && curr.value!=val){
            prev = curr
            curr= curr.next
        }
        if(curr){
            node.next = curr
            prev.next =node

        }
    }

    
    insertAt(index,val){
        if(this.isEmpty()){
            return this.append(val)
        }
        let node = new Node(val)
        if(this.size < index || index < 0){
            return 
        }
        let curr = this.head
        if(index == 0){
            node.next = this.head
            this.head = node
        } else {
        for( let i =0 ; i < index-1 ; i++){
            curr = curr.next
        }
        node.next = curr.next
        curr.next = node
    }
        this.size++
    }

}


    let list = new LinkedList()
    list.append(10)
    list.append(20)
    list.append(13)
    // list.print1()
    // list.reverse()
    list.insertAt(0,100)
    list.print1()